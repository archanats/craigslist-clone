import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import Header from './Header';
import Category from './pages/Category';
import Home from './pages/Home';
import Details from './pages/Details';
import Listings from './pages/Listings';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/:city" component={Home} />
          <Route exact path="/:city/:category" component={Category} />
          <Route exact path="/:city/:category/:listings" component={Listings} />
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
