import React from 'react';
import Logo from './img/logo.jpg';

export default function Header() {

  return (
    <header>
      <img src={Logo} alt="So You Think You Can France logo" />
      <nav>
        <span className="navItem">City Guides</span>
        <span className="navItem">Blog</span>
      </nav>

    </header>
  )


}