import React, { forwardRef } from 'react';
import { Movie } from '../../types/movie';
import { Card, Image, Title } from './MovieCard.styles';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = forwardRef<HTMLDivElement, MovieCardProps>(({ movie }, ref) => (
  <Card ref={ref} className="titillium-web-light">
    <Image src={movie.imageUrl} alt={movie.title} />
    <Title className="titillium-web-light">{movie.title}</Title>
  </Card>
));

export default MovieCard;
