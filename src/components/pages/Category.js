import React, { Component } from 'react';

export default class Category extends Component {
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="category">
        <div className="container">Category Page:  {match.params.category}</div>
      </div>
    );
  }
}
