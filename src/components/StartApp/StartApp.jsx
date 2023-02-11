import s from './StartApp.module.css';
import { NavLink } from 'react-router-dom';

export const StartApp = () => {
  return (
    <nav className={s.navList}>
      <NavLink className={s.btn_style} to="/">
        Home
      </NavLink>
      <NavLink className={s.btn_style} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};
//  default StartApp;
