import React, { useState } from 'react';
import './searchbar.css';
import {ReactComponent as SearchIcon} from '../../assets/search-outline.svg';

const SearchBar = ({handleSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="searchbar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Inhaltsstoffe suchen"
      >
      </input> 
      <button onClick={() => handleSearch(searchTerm)}><SearchIcon></SearchIcon></button>
    </div>
  );
};

export default SearchBar;
