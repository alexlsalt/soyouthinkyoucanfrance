import React from "react";


export function CategoryWithAddress({ category, title }) {
  if (category.length === 0) return null;
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {
            category.map(el => (
              <li key={category.indexOf(el)}>{el.name} | {el.address}</li>
            ))
          }
        </ul>
      </div>
    )
}

export function CategoryWithList({ category, title }) {
  if (category.length === 0) return null;
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {
            category.map(el => (
              <li key={category.indexOf(el)}>{el}</li>
            ))
          }
        </ul>
      </div>
    )
}
