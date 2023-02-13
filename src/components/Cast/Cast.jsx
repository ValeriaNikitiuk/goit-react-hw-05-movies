import { fetchMovieActors } from '../../api/apiFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState(null);

  useEffect(() => {
    fetchMovieActors(movieId).then(({ cast }) => {
      const info = cast.reduce((acc, man) => {
        const profilePhoto = man.profile_path
          ? `https://image.tmdb.org/t/p/original/${man.profile_path}`
          : `https://t3.ftcdn.net/jpg/01/20/46/58/360_F_120465806_mjtuw20YBpPzsuAqed3sR8ucFJHYbHdE.webp`;
        const actor = {
          id: man.id,
          name: man.name,
          character: man.character,
          photo: profilePhoto,
          popularity: man.popularity,
        };
        return [...acc, actor];
      }, []);

      setCastInfo(info);
    });
  }, [movieId]);

  if (!castInfo) return;

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {castInfo.map(({ id, name, character, photo, popularity }) => {
          return (
            <li key={id}>
              <img src={photo} width="220" height="300" alt={name} />
              <h3>{name}</h3>
              <span>Character: {character}</span>
              <span>Popularity: {popularity}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
