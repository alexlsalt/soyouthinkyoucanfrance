import React from "react";

export default function CategoryItem({ category, title, type }) {
  if (category.length === 0) return null;

  return (
    <div>
        <h2>{title}</h2>
        <ul>
          {
            type === 'address' && 
            category.map(el => (
              <li key={category.indexOf(el)}>{el.name} | {el.address}</li>
            ))
          }
          {
            type === 'list' && 
            category.map(el => (
              <li key={category.indexOf(el)}>{el}</li>
            ))
          }
        </ul>
      </div>
  )
}