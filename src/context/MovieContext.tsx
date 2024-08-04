

// import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
// import { Movie } from '../types/movie';
// import { fetchMovies } from '../services/api';

// interface MovieContextProps {
//   movies: Movie[];
//   loadMoreMovies: () => void;
// }
// interface MovieProviderProps {
//     children: ReactNode;
//   }

// export const MovieContext = createContext<MovieContextProps>({
//   movies: [],
//   loadMoreMovies: () => {},
// });

// export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [page, setPage] = useState(1);

//   const loadMovies = useCallback(async () => {
//     const newMovies = await fetchMovies(page);
//     setMovies(prevMovies => [...prevMovies, ...newMovies]);
//   }, [page]);

//   useEffect(() => {
//     loadMovies();
//   }, [loadMovies]);

//   const loadMoreMovies = useCallback(() => {
//     setPage(prevPage => prevPage + 1);
//   }, []);

//   return (
//     <MovieContext.Provider value={{ movies, loadMoreMovies }}>
//       {children}
//     </MovieContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Movie } from '../types/movie';
import { fetchMovies } from '../services/movieService';

interface MovieContextProps {
  movies: Movie[];
  loadMoreMovies: () => void;
}
interface MovieProviderProps {
    children: ReactNode;
  }

export const MovieContext = createContext<MovieContextProps>({
  movies: [],
  loadMoreMovies: () => {},
});

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  const loadMovies = useCallback(async () => {
    const newMovies = await fetchMovies(page);
    setMovies(prevMovies => [...prevMovies, ...newMovies]);
  }, [page]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  const loadMoreMovies = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  return (
    <MovieContext.Provider value={{ movies, loadMoreMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
