import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './filmDetail.module.scss';
import { Container } from 'react-bootstrap';
import { FilmCard } from 'components/FilmCard';

export function FilmDetail({ films, onlike }) {
  const { id } = useParams();
  const filmData = useMemo(() => {
    return films.find((film) => film.imdbID === id);
  }, [id, films]);

  return (
    <div className={styles.detail}>
      <Container className={styles.container}>
        {filmData && (
          <FilmCard
            onLike={onlike}
            Title={filmData.Title}
            Poster={filmData.Poster}
            Year={filmData.ContainerYear}
            liked={filmData.liked}
            imdbID={filmData.imdbID}
          />
        )}
        <Link to="/">
          <h4>Back to All Films</h4>
        </Link>
      </Container>
    </div>
  );
}
