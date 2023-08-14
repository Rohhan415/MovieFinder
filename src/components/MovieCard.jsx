import styles from "./MovieCard.module.css";
const MovieCard = ({ movie, IMAGE_PATH }) => {
  return (
    <div className={StyleSheet.MovieCard}>
      {movie.poster_path ? (
        <img
          className={styles.movieCover}
          src={`${IMAGE_PATH}${movie.poster_path}`}
          alt=""
        />
      ) : (
        <div className={styles.moviePlaceHolder}>No Image found</div>
      )}
      <h5 className={styles.movieTitle}>{movie.title}</h5>
    </div>
  );
};

export default MovieCard;