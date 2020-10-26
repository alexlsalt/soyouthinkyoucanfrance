import React from "react";
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import Main from './Main';
import { Posts } from './Posts';
import './Blog.css';

import { MajorDifferences, ThirtyThingsLoveFrance, AsstSpotlightReuben, AsstSpotlightCharity, AsstSpotlightAmber, ThirtyThingsFreeTime } from './Post';

export default function Blog() {


  return (
    <Router>
      <div>
      <Main 
        headline="Bienvenue to the Blog Archives!"
        tagline="Handy tips for teaching English in France"
      />

      <div className='blog-content'>
        
          <Switch>
            <Route path='/blog'>
              <Posts />
            </Route>

            <Route path='/major-differences-schools'>
              <BackToPostsButton />
              <MajorDifferences />
              
            </Route>
            <Route path='/things-love-teaching-france'>
              <BackToPostsButton />
              <ThirtyThingsLoveFrance />
              
            </Route>
            <Route path='/assistant-spotlight-reuben'>
              <BackToPostsButton />
              <AsstSpotlightReuben />
            </Route>
            <Route path='/thirty-things-free-time'>
              <BackToPostsButton />
              <ThirtyThingsFreeTime />
            </Route>
            <Route path='/assistant-spotlight-charity'>
              <BackToPostsButton /> 
              <AsstSpotlightCharity />
            </Route>
            <Route path='/assistant-spotlight-amber'>
              <BackToPostsButton />
              <AsstSpotlightAmber />
            </Route>
          </Switch>
      </div>

      
    </div>
    </Router>
  );
}


function BackToPostsButton() {
  return (
    <Link to='/blog'>
      <button className="back-button">Back to blog posts</button>
    </Link>
  )
}