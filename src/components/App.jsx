import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

export const App = () => {
  const Home = lazy(() =>
    import('./pages/Home/Home/Home').then(module => ({
      ...module,
      default: module.Home,
    }))
  );

  const SharedLayout = lazy(() =>
    import('./SharedLayout/SharedLayout').then(module => ({
      ...module,
      default: module.SharedLayout,
    }))
  );
  const Movies = lazy(() =>
    import('./pages/Movies/Movies').then(module => ({
      ...module,
      default: module.Movies,
    }))
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
