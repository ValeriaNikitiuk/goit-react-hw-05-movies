import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSearch } from 'api/apiFetch';

import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');
  const [searchParam, setSearchParam] = useState();
  const inputFilter = searchParam.get('filter') ?? '';

  useEffect(() => {
    if (!inputFilter) {
      return;
    }
    async function fetch() {
      try {
        const { results } = await fetchSearch(inputFilter);
        if (results.length < 1) {
          Notiflix.Notify.warning("We can't find it, please try again");
        }
        setMovies(results);
      } catch (error) {
        Notiflix.Notify.warning('Something wrong, later please');
      }
    }
    fetch();
  }, [inputFilter]);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParam(input !== '' ? { filter: input } : {});
    setInput('');
  };

  const onChangeSearch = value => {
    setInput(value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="input"
          onChange={e => onChangeSearch(e.currentTarget.value.toLowerCase())}
          value={input}
        ></input>
        <button type="submit">Search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(movie => {
            let posterPath;
            if (movie.poster_path) {
              posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
            } else {
              posterPath =
                'https://flora.dobro-est.com/tradeskantsiya-tradescantia-opisanie-vidyi-i-uhod-za-tradeskantsiey.html';
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
