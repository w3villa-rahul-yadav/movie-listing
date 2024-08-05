import React, { useState } from 'react';
import Header from '../components/common/Header';
import MovieGrid from '../components/movie/MovieGrid';
import { Container } from './HomePage.styles'; 

const HomePage: React.FC = () => {
    const [filterText, setFilterText] = useState('');

  return (
    <Container>
      <Header setFilterText={setFilterText} />
      <MovieGrid filterText={filterText}  />
    </Container>
  );
};

export default HomePage;
