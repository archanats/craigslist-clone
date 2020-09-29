import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import categories from '../../data/category';

export default class Home extends Component {
  categories = () => {
    const links = (item) =>
      item.listings.map((link, idx) => (
        <Link
          key={idx}
          to={`/${this.props.match.params.city}/${item.title}/${link.slug}`}
          className="link"
        >
          {link.name}
        </Link>
      ));

    return categories.map((item, i) => (
      <div key={i} className="categories">
        <Link
          to={`/${this.props.match.params.city}/${item.title}`}
          className="title"
        >
          {item.title}
        </Link>
        <div className={`link-group single-col`}>{links(item)}</div>
      </div>
    ));
  };

  trendingTags = () => {
    const arr = [
      'Cars',
      'Apple Macbook',
      'Piano Lessons',
      'Movers & Packers',
      'For Sale',
      'For Rent',
      'Meal Service',
      'Ballet Classes',
      'Yoga',
    ];
    return arr.map((item, i) => (
      <div key={i} className="tag">
        {item}
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
