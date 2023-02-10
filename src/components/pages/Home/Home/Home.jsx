import { useState, useEffect } from 'react';
import { fetchTrending } from 'api/apiFetch';
import Notiflix from 'notiflix';
import { Link } from 'react-router-dom';

export const Home = () => {
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
      <h1> Trending today</h1>
      <ul>
        {trendings.map(movie => {
          let posterPath;
          if (movie.poster_path) {
            posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
          } else {
            posterPath =
              'https://flora.dobro-est.com/tradeskantsiya-tradescantia-opisanie-vidyi-i-uhod-za-tradeskantsiey.html';
          }
          return (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <img src={posterPath} width="420" alt={movie.title} />
              <h2>{movie.title}</h2>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

// export default Home;
