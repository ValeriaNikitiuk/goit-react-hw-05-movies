import s from './StartApp.module.css';
import { NavLink } from 'react-router-dom';

const getFullName = ({ isActive }) => {
  return isActive ? `${s.btn_style_activ}  ${s.btn_style}` : s.btn_style;
};

export const StartApp = () => {
  return (
    <nav className={s.navList}>
      <NavLink className={getFullName} to="/">
        Home
      </NavLink>
      <NavLink className={getFullName} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};
