import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMovies } from '../../hooks/useMovies';
import MovieCard from './MovieCard';
import { GridContainer } from './MovieGrid.styles';

interface MovieGridProps {
  filterText: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({ filterText }) => {
  const { movies, loadMoreMovies, hasMore, loading, error, resetMovies } = useMovies();

  const filteredMovies = filterText
    ? movies.filter(movie => movie.title.toLowerCase().includes(filterText.toLowerCase()))
    : movies;

  useEffect(() => {
    resetMovies(); // Reset movies when filterText changes
  }, [filterText, resetMovies]);

  return (
    <>
      {error && <div className="titillium-web-regular">{error}</div>}
      <InfiniteScroll
        dataLength={filteredMovies.length}
        next={loadMoreMovies}
        hasMore={hasMore}
        loader={<h4 className="titillium-web-regular">Loading...</h4>}
        style={{ overflow: 'hidden' }}
      >
        <GridContainer>
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </GridContainer>
      </InfiniteScroll>
      {loading && <h4 className="titillium-web-regular">Loading more movies...</h4>}
    </>
  );
};

export default MovieGrid;
