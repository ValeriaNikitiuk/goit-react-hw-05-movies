import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'api/apiFetch';
import s from './Movies.module.css';

import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');
  const [searchParam, setSearchParam] = useSearchParams();
  const inputEle = searchParam.get('query') ?? '';

  useEffect(() => {
    if (!inputEle) {
      return;
    }
    async function fetch() {
      try {
        const { results } = await fetchSearch(inputEle);
        if (results.length < 1) {
          Notiflix.Notify.warning("We can't find it, please try again");
        }
        setMovies(results);
      } catch (error) {
        Notiflix.Notify.warning('Something wrong, later please');
      }
    }
    fetch();
  }, [inputEle]);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParam(input !== '' ? { query: input } : {});
    setInput('');
  };

  const onChangeSearch = value => {
    setInput(value);
  };

  return (
    <>
      <form className={s.form} onSubmit={onSubmit}>
        <input
          className={s.search}
          placeholder="enter a movie search"
          type="text"
          name="input"
          onChange={e => onChangeSearch(e.currentTarget.value.toLowerCase())}
          value={input}
        ></input>
        <button className={s.search_btn} type="submit">
          Search
        </button>
      </form>
      {movies && (
        <ul>
          {movies.map(movie => {
            let posterPath;
            if (movie.poster_path) {
              posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
            } else {
              posterPath =
                'https://r6z4d5g2.rocketcdn.me/wp-content/uploads/2015/08/mac-fix-dont-load.jpg';
            }
            return (
              <Link
                key={movie.id}
                to={`${movie.id}`}
                state={{ from: location }}
              >
                <img src={posterPath} width="400" alt={movie.title} />
                <h2>{movie.title}</h2>
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Movies;
