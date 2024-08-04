import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMovies } from '../../hooks/useMovies';
import MovieCard from './MovieCard';
import { GridContainer } from './MovieGrid.styles';

const MovieGrid: React.FC = () => {
  const { movies, loadMoreMovies, hasMore, loading, error, resetMovies } = useMovies();
  const [filterText, setFilterText] = useState('');

  const filteredMovies = filterText
    ? movies.filter(movie => movie.title.toLowerCase().includes(filterText.toLowerCase()))
    : movies;

  useEffect(() => {
    resetMovies(); // Reset movies when filterText changes
  }, [filterText, resetMovies]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      {error && <div>{error}</div>}
      <InfiniteScroll
        dataLength={filteredMovies.length}
        next={loadMoreMovies}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        style={{ overflow: 'hidden' }}
      >
        <GridContainer>
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </GridContainer>
      </InfiniteScroll>
      {loading && <h4>Loading more movies...</h4>}
    </>
  );
};

export default MovieGrid;
