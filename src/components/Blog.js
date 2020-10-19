import React from "react";
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Main from './Main';
import { Posts } from './Posts';

export default function Blog() {

  return (
    <Router>
      <div>
      <Main 
        headline="Bienvenue to the Blog Archives!"
        tagline="Note: this page is still under construction"
      />

      <Posts />
    </div>
    </Router>
  );
}
