import React, { useState } from 'react';
import './searchbar.css';
import {ReactComponent as SearchIcon} from '../../assets/search-outline.svg';

const SearchBar = ({handleSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(searchTerm);
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
      <button><SearchIcon></SearchIcon></button>
    </div>
  );
};

export default SearchBar;
