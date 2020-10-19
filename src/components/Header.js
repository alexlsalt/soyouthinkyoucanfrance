import React from 'react';
import Logo from '../img/logo.jpg';

import { Link } from 'react-router-dom';

export default function Header() {

  return (

    <header>
      <img src={Logo} alt="So You Think You Can France logo" />
      <nav>
        <ul>
          <li>
            <Link to ='/'>
              <button>City Guides</button></Link>
          </li>
          <li>
            <Link to='/blog'>
              <button>Blog</button>
            </Link>
          </li>
        </ul>
      </nav>

    </header>


    
    
  )


}