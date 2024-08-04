import { useState, useEffect, useCallback } from 'react';
import { Movie } from '../types/movie';
import { fetchMovies } from '../services/movieService';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMovies = useCallback(async () => {
    setLoading(true);
    try {
      const newMovies = await fetchMovies(page);
      if (newMovies.length === 0) {
        setHasMore(false);
      } else {
        setMovies(prevMovies => [...prevMovies, ...newMovies]);
      }
    } catch (err) {
      setError('Failed to load movies.');
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  const loadMoreMovies = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  const resetMovies = useCallback(() => {
    setMovies([]);
    setPage(1);
    setHasMore(true);
  }, []);

  return { movies, loadMoreMovies, hasMore, loading, error, resetMovies };
};
