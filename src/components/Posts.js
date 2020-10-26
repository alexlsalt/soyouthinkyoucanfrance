import React from "react";
import {
  Link
} from "react-router-dom";


export function Posts() {

  return (
    <div>
      <div className="blog-posts">

        <ul className='post-list'>
          <Link to='/major-differences-schools' style={{textDecoration: 'none'}}>
            <li>10 Differences Between French & American High Schools</li>
          </Link>
          <Link to='/things-love-teaching-france' style={{textDecoration: 'none'}}>
            <li>30 Reasons to Love Teaching English in France</li>
          </Link>
          <Link to='/assistant-spotlight-reuben' style={{textDecoration: 'none'}}>
            <li>Assistant Spotlight with Reuben Ramsay</li>
          </Link>
          
          <Link to='/thirty-things-free-time' style={{textDecoration: 'none'}}>
          <li>
            30 Things to Do in Your Free Time as a Teaching Assistant
          </li>
          </Link>
          
          <Link to='/assistant-spotlight-charity' style={{textDecoration: 'none'}}>
            <li>Assistant Spotlight with Charity Watson</li>
          </Link>

          <Link to='/assistant-spotlight-amber' style={{textDecoration: 'none'}}>
            <li>Assistant Spotlight with Amber Sweat</li>
          </Link>
        </ul>

      </div>
    </div>
  );
}