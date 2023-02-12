import { fetchMovieDetails } from '../../api/apiFetch';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { DetailsCard } from '../../components/DetailsCard/DetailsCard';
import { NavLink, Link } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const movieFetch = async () => {
      try {
        const result = await fetchMovieDetails(movieId);
        setMovie(result);
      } catch (error) {
        setError(error);
      }
    };
    movieFetch();
  }, [movieId]);

  return (
    <>
      <div>
        <div>
          <Link to={backLink}> Return to all movies </Link>
        </div>
        {error && <div>Something wrong</div>}
        {movie && (
          <div>
            <DetailsCard movie={movie} />
            <h3> Additiona information</h3>
            <NavLink to={'cast'} state={location.state}>
              Cast
            </NavLink>
            <NavLink to={'reviews'} state={location.state}>
              Reviews
            </NavLink>
          </div>
        )}
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
