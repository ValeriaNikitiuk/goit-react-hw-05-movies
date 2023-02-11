import { useState, useEffect } from 'react';
import { fetchTrending } from 'api/apiFetch';
import Notiflix from 'notiflix';
import { Link } from 'react-router-dom';
import s from './Home.module.css';

const Home = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { results } = await fetchTrending();
        if (results < 1) {
          Notiflix.Notify.warning('not possible to find , please try again');
        }
        setTrendings(results);
      } catch {
        Notiflix.Notify.warning('Something went wrong');
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className={s.title}> Trending today</h1>
      <ul className={s.home_cards}>
        {trendings.map(movie => {
          let posterPath;
          if (movie.poster_path) {
            posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
          } else {
            posterPath =
              'https://flora.dobro-est.com/tradeskantsiya-tradescantia-opisanie-vidyi-i-uhod-za-tradeskantsiey.html';
          }
          return (
            <Link
              className={s.homeItems}
              key={movie.id}
              to={`/movies/${movie.id}`}
            >
              <img src={posterPath} width="400" alt={movie.title} />
              <h2 className={s.homeItems_title}>{movie.title}</h2>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
