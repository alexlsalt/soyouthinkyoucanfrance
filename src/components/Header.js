import React from 'react';
import Logo from '../img/logo.jpg';

export default function Header({ activeTab, onTabChange }) {

  const pageClass = tabName => 
    `navItem ${
      activeTab === tabName ? 'active' : ''
    }`;

  return (
    <header>
      <img src={Logo} alt="So You Think You Can France logo" />
      <nav>
        <ul>
          <li className={pageClass('guides')}>
            <button onClick={() => onTabChange('guides')}>City Guides</button>
          </li>
          <li className={pageClass('blog')}>
            <button onClick={() => onTabChange('blog')}>Blog</button>
          </li>
        </ul>
      </nav>

    </header>
  )


}