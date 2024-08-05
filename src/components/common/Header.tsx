import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { HeaderContainer } from './Header.styles';
import back from '../../img/Back.png';
import search from '../../img/search.png';

const Header: React.FC = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(prevShowSearchBar => !prevShowSearchBar);
  };

  return (
    <HeaderContainer className={showSearchBar ? 'full' : ''}>
      <div>
        <div>
          <img src={back} alt="Back" />
          <h1 className="titillium-web-bold">Romantic Comedy</h1>
        </div>
        <img 
          src={search} 
          alt="Search" 
          onClick={toggleSearchBar}
          style={{ cursor: 'pointer' }} 
        />
      </div>
      {showSearchBar && <SearchBar />}
    </HeaderContainer>
  );
};

export default Header;
