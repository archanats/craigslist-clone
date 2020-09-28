import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Category from './pages/Category';
import Home from './pages/Home';
import Details from './pages/Details';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/:city" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/:city" component={Home} />
          <Route exact path="/:city/:category" component={Category} />
          <Route exact path="/:city/:category/:listings" component={Category} />
          <Route
            exact
            path="/:city/:category/:listings/:item"
            component={Details}
          />
          {/* <Redirect to="/" /> */}
        </div>
      </Router>
    );
  }
}
