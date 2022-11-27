import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './home.module.scss';
import { FilmCard } from 'components/FilmCard';

export function Home({ films, onLike }) {
  return (
    <div className={styles.home}>
      <Container fluid className={styles.container}>
        <Row>
          {films.map((film) => {
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
