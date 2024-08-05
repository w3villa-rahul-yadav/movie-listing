import React from 'react';
import { SearchInput } from './SearchBar.styles';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <SearchInput
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
      className="titillium-web-regular"
    />
  );
};

export default SearchBar;
