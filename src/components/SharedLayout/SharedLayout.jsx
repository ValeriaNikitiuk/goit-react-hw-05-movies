import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StartApp } from '../StartApp/StartApp';

export const SharedLayout = () => {
  return (
    <>
      <StartApp />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
//  default SharedLayout;
