import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

export const App = () => {
  const Home = lazy(() => import('../pages/Home/Home.jsx'));

  const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

  const Movies = lazy(() => import('../pages/Movies/Movies'));

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            {' '}
          </Route>

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
