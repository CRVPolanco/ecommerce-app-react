import React from 'react';
import iconSearch from '/src/assets/icons/search.svg';
import { NavLink } from 'react-router-dom';
import '../styles/SearchInput.css';

function SearchInput(){

  const [searchValue, setSearchValue] = React.useState('');

  const navigate = (e) => {
    setSearchValue(e.target.value);
  }

  return(
    <div className='Search'>
      <input type="text" placeholder='Search product!' value={searchValue} onChange={navigate}/>
      <NavLink className='Search__icon-search' to={`/search/${searchValue}`}><img src={iconSearch} alt="Search" /></NavLink>
    </div>
  )
}

export { SearchInput }
