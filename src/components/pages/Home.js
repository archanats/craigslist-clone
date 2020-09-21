import React, { Component } from 'react';

export default class Home extends Component {
  categories = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    return arr.map((item, i) => {
      return (
        <div key={i} className="categories">
          <div className="title">Community</div>
          <div className="link-group">
            <a href="#" className="link">
              Community
            </a>
            <a href="#" className="link">
              General
            </a>
            <a href="#" className="link">
              Activities
            </a>
            <a href="#" className="link">
              Groups
            </a>
            <a href="#" className="link">
              Artists
            </a>
            <a href="#" className="link">
              Local News
            </a>
            <a href="#" className="link">
              Child Care
            </a>
            <a href="#" className="link">
              Lost & Found
            </a>
            <a href="#" className="link">
              Classes
            </a>
            <a href="#" className="link">
              Events
            </a>
            <a href="#" className="link">
              Pets
            </a>
          </div>
        </div>
      );
    });
  };

  trendingTags = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8];
    return arr.map((item, i) => (
      <div key={i} className="tag">
        Apple Macbook
      </div>
    ));
  };

  render() {
    return (
      <div className="home">
        <div className="container">
          <h1>
            Connecting People <br /> Everywhere
          </h1>
          <section className={'links'}>{this.categories()}</section>
          <section className={'trending'}>
            <input type="text" name="search" className="search" />
            <div className="title">
              <span className="far fa-clock" />
              Trending Now
            </div>
            <div className="trending-tags">{this.trendingTags()}</div>
          </section>
        </div>
      </div>
    );
  }
}
