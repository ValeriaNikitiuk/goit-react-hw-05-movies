import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StartApp } from '../StartApp/StartApp';
import s from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <div className={s.container}>
        <StartApp />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
//  default SharedLayout;
