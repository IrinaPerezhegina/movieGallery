import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import { MainLayout } from 'layouts/MainLayout';
import { Favourites } from 'Pages/favourites';
import { useFilms } from 'hooks/useFilms';
import { FilmDetail } from 'Pages/FilmDetails';
import { Home } from './Pages/home';

function App() {
  const { films, isLoading, handleLike } = useFilms();

  return (
    <Router>
      <MainLayout>
        {isLoading ? (
          <Spinner />
        ) : (
          <Switch>
            <Route path="/" exact>
              <Home films={films} onLike={handleLike} />
            </Route>
            <Route path="/favorites">
              <Favourites onLike={handleLike} films={films} />
            </Route>
            <Route path="/film/:id?">
              <FilmDetail films={films} onlike={handleLike} />
            </Route>
          </Switch>
        )}
      </MainLayout>
    </Router>
  );
}

export default App;
