import React from 'react';
import { Link } from 'react-router-dom';
import styles from './filmCard.module.scss';
import favourite from '../../assets/img/favourite.png';
import notFavourite from '../../assets/img/notFavourite.png';

export function FilmCard({ Year, Poster, Title, imdbID, liked, onLike }) {
  const handleLike = (imdbID) => () => {
    onLike(imdbID);
  };
  return (
    <div className={styles.card}>
      <img src={Poster} alt={Title} className={styles.img} />
      <Link to={`/film/${imdbID}`}>
        <h2 className={styles.title}>{Title}</h2>
      </Link>
      <p>{Year}</p>
      <button onClick={handleLike(imdbID)} className={styles.likedBtn}>
        <img className={styles.like} src={liked ? favourite : notFavourite} alt={Title} />
      </button>
    </div>
  );
}
