import React from 'react';
import SearchBar from './SearchBar';
import { HeaderContainer } from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>Romantic Comedy</h1>
      <SearchBar />
    </HeaderContainer>
  );
};

export default Header;
