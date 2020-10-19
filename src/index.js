import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {


  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchBox />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));