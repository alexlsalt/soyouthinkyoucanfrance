import React from 'react';

export default function Main({ headline, tagline }) {

  return (
    <div className="main red">
      <h1 className="main-heading">
        {headline}
      </h1>
      <h2 className="container">
        {tagline}
      </h2>
    </div>
  )

}