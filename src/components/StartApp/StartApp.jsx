import s from './StartApp.module.css';
import { NavLink } from 'react-router-dom';

export const StartApp = () => {
  return (
    <nav className={s.navList}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
};
//  default StartApp;
