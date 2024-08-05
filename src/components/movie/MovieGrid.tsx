import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMovies } from '../../hooks/useMovies';
import MovieCard from './MovieCard';
import { GridContainer } from './MovieGrid.styles';
import { Movie } from '../../types/movie';

interface MovieGridProps {
  filterText: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({ filterText }) => {
  const { movies, loadMoreMovies, hasMore, loading, error, resetMovies } = useMovies();
  const [filterMovies, setFilterMovies] = useState<Movie[]>(movies);

  useEffect(() => {
    if (filterText) {
      const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilterMovies(filteredMovies);
    } else {
      setFilterMovies(movies);
    }
  }, [filterText, movies]);

  useEffect(() => {
    if (!filterText) {
      resetMovies();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText]);

  return (
    <>
      {/* {console.log("filterMovies:", filterMovies)} */}
      <InfiniteScroll
        dataLength={filterMovies.length}
        next={loadMoreMovies}
        hasMore={hasMore}
        loader={ loading && <h4 className="titillium-web-regular">Loading...</h4>}
        style={{ overflow: 'hidden' }}
      >
        <GridContainer>
          {filterMovies?.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </GridContainer>
      </InfiniteScroll>
      {loading && <h4 className="titillium-web-regular">Loading more movies...</h4>}
      {/* {error && <div className="titillium-web-regular">{error}</div>} */}

    </>
  );
};

export default MovieGrid;
