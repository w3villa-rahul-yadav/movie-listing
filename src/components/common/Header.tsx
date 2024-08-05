import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { HeaderContainer } from './Header.styles';
import back from '../../img/Back.png';
import search from '../../img/search.png';

interface HeaderProps {
  setFilterText: (text: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setFilterText }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleSearchBar = () => {
    setShowSearchBar(prevShowSearchBar => !prevShowSearchBar);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setFilterText(e.target.value);
  };

  return (
    <HeaderContainer className={showSearchBar ? 'full' : ''}>
      <div>
        <div>
          <img src={back} alt="Back" />
          <h2 className="titillium-web-light">Romantic Comedy</h2>
        </div>
        <img 
          src={search} 
          alt="Search" 
          onClick={toggleSearchBar}
          style={{ cursor: 'pointer' }} 
        />
      </div>
      {showSearchBar && (
        <SearchBar value={searchText} onChange={handleSearchChange} />
      )}
    </HeaderContainer>
  );
};

export default Header;
