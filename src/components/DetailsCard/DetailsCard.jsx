import PropTypes from 'prop-types';
import s from './DetailsCard.module.css';

export const DetailsCard = ({ movie }) => {
  const { title, release_date, genres, overview, vote_average } = movie;

  let posterPath;
  if (movie.poster_path) {
    posterPath = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  } else {
    posterPath = `https://r6z4d5g2.rocketcdn.me/wp-content/uploads/2015/08/mac-fix-dont-load.jpg`;
  }
  return (
    <div className={s.movie_cards}>
      <img className={s.posters_img} src={posterPath} alt={title} />
      <div className={s.movie_container}>
        <h2 className={s.movie_title}>
          {title}({new Date(release_date).getFullYear()})
        </h2>
        <p> User Score: {Math.round(vote_average * 10)}%</p>
        <h3 className={s.movie_title}>Overview</h3>
        <p>{overview}</p>
        <h3 className={s.movie_title}>Genres</h3>
        <p> {genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};
DetailsCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};

// export default DetailsCard;
