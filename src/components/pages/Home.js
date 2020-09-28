import React, { Component } from 'react';

import categories from '../../data/category';

export default class Home extends Component {
  categories = () => {
    const links = (item) =>
      item.listings.map((link, idx) => (
        <a key={idx} href={`${item.title}/${link.slug}`} className="link">
          {link.name}
        </a>
      ));

    return categories.map((item, i) => (
      <div key={i} className="categories">
        <a href={`/${this.props.match.params.city}/${item.title}`} className="title">{item.title}</a>
        <div className={`link-group single-col`}>{links(item)}</div>
      </div>
    ));
  };

  trendingTags = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8];
    return arr.map((item, i) => (
      <div key={i} className="tag">
        Apple Macbook
      </div>
    ));
  };

  componentDidMount() {
    const { match, history } = this.props;
    if (!match.params.city) {
      history.push('/nyc');
    }
  }
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
