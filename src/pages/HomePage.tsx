import React from 'react';
import Header from '../components/common/Header';
import MovieGrid from '../components/movie/MovieGrid';
import { Container } from './HomePage.styles'; 

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <MovieGrid />
    </Container>
  );
};

export default HomePage;
