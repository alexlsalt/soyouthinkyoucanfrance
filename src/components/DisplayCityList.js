import React from 'react';



export default function DisplayCityList({ onClick, list }) {
  return (
    <div className="city-list-display">
      <button className="button" onClick={onClick}>
        Click to display the list of available cities
      </button>

      <ul className="city-list">
        {
          list.map(el => (
            <li key={list.indexOf(el)}>{el}</li>
          ))
        }
      </ul>
    </div>
  )
}