import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import MovieDetails from '../pages/MovieDetails/MovieDetails';

export const App = () => {
  const Home = lazy(() => import('../pages/Home/Home.jsx'));

  // const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

  const Movies = lazy(() => import('../pages/Movies/Movies'));

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>

          <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
