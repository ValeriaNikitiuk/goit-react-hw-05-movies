import { fetchMovieReviews } from '../../api/apiFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isReviewsFetched, setIsReviewsFetched] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(
        data.results.map(
          ({ id, author, author_details: { avatar_path }, content }) => ({
            id,
            author,
            content,
            avatar:
              avatar_path && !avatar_path.includes('http')
                ? `https://image.tmdb.org/t/p/original${avatar_path}`
                : 'https://t3.ftcdn.net/jpg/01/20/46/58/360_F_120465806_mjtuw20YBpPzsuAqed3sR8ucFJHYbHdE.webp',
          })
        )
      );
      setIsReviewsFetched(true);
    };

    getReviews();
  }, [movieId]);

  if (!reviews) return;

  return (
    <div>
      <h2>Reviews</h2>
      {!reviews && <p>No review </p>}
      {reviews && (
        <>
          <p>Found {reviews.length} review for this movie:</p>
          <ul>
            {reviews.map(({ id, author, avatar, content }) => (
              <li key={id}>
                <img src={avatar} alt={author} />
                <p>
                  <b>Author:</b>
                  {author}
                </p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
          {!reviews.length && isReviewsFetched && <p> There are no reviews </p>}
        </>
      )}
    </div>
  );
};

export default Reviews;
