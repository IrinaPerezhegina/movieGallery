import { useEffect, useState, useCallback } from 'react';

const SLUG = 'marvel';
const API_KEY = '9b67fc54';
const BASE_URL = `https://www.omdbapi.com/?s=${SLUG}&apikey=${API_KEY}`;

export function useFilms() {
  const [films, setFilms] = useState([]);
  const [isLoading, setLoading] = useState(false);

  function formatResponse(dataFromServer) {
    return dataFromServer.Search.map((film) => {
      const dataFromStorage = getFromLocalStorage('likedFilms');
      return {
        ...film,
        liked: dataFromStorage[film.imdbID] || false,
      };
    });
  }

  function setToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const formData = formatResponse(data);
        setFilms(formData);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLike = useCallback((imdbID) => {
    setFilms((prev) => {
      return prev.map((film) => {
        if (film.imdbID === imdbID) {
          return {
            ...film,
            liked: !film.liked,
          };
        }
        return film;
      });
    });
    const likedFromStorage = getFromLocalStorage('likedFilms');
    if (likedFromStorage[imdbID]) {
      likedFromStorage[imdbID] = false;
    } else {
      likedFromStorage[imdbID] = true;
    }
    setToLocalStorage('likedFilms', likedFromStorage);
  }, []);

  return { films, isLoading, handleLike };
}
