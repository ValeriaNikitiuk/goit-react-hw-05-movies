import s from './StartApp.module.css';

export const StartApp = () => {
  return (
    <ul className={s.navList}>
      <li to="/">Home</li>
      <li to="/">Movies</li>
    </ul>
  );
};
