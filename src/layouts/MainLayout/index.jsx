import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import styles from './mainLayout.module.scss';

export function MainLayout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  return (
    <Container className={styles.container}>
      <nav className="mt-3">
        <h1>{isHome ? 'All Films' : 'Your Favorite Films'}</h1>
        <div className={styles.nav}>
          <NavLink to="/" className={styles.link} activeClassName={styles.active} exact>
            <Nav.Item>All Films</Nav.Item>
          </NavLink>
          <NavLink to="/favorites" className={styles.link} activeClassName={styles.active}>
            <Nav.Item>See Favorite Films</Nav.Item>
          </NavLink>
        </div>
      </nav>

      <main className={styles.main}> {children}</main>
    </Container>
  );
}
