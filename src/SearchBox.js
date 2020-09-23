import React from 'react';
import SearchBoxButton from './SearchBoxButton';
import Image from './img/city-guide2.jpg';

export default function SearchBox() {
    
  return (
    <div className="search-box">
      <h2>Search for a city guide below:</h2>
      <input type="text" className="city-guide__input" />
      <SearchBoxButton />
      <img src={Image} className="city-guide__image" />
    </div>
  )
}
  



  