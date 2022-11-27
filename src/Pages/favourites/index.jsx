import React, { useMemo } from 'react';
import styles from './favourites.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { FilmCard } from 'components/FilmCard';

export function Favourites({ films, onLike }) {
  const filtredFilms = useMemo(() => {
    return films.filter((film) => film.liked);
  }, [films]);
  return (
    <div className={styles.favourites}>
      {' '}
      <Container fluid>
        {filtredFilms.length === 0 && <h2>No Any Favourite Films...</h2>}
        <Row>
          {filtredFilms.map((film) => {
            const { Title, Poster, Year, imdbID, liked } = film;
            return (
              <Col lg={4} key={imdbID}>
                <FilmCard
                  onLike={onLike}
                  Title={Title}
                  Poster={Poster}
                  Year={Year}
                  liked={liked}
                  imdbID={imdbID}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
