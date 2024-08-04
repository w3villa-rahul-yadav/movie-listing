import React from 'react';
import { SearchInput } from './SearchBar.styles'; 

const SearchBar: React.FC = () => {
  return (
    <SearchInput type="text" placeholder="Search..." />
  );
};

export default SearchBar;
