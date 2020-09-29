import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import items from '../../data/items';

export default class Category extends Component {
  state = {
    min_price: '0',
    max_price: '10000',
    sort: 'newest',
    view: 'gallery',
    make: 'bmw',
    model: 'm6',
  };

  resetFilters = () => {
    this.setState({
      min_price: '0',
      max_price: '10000',
      sort: 'newest',
      view: 'gallery',
      make: 'bmw',
      model: 'm6',
    });
    const { match, history } = this.props;
    history.push(`/${match.params.city}/${match.params.category}`);
  };

  submitFilters = () => {
    const { match, history } = this.props;
    const minPrice = `min_price=${this.state.min_price}`;
    const maxPrice = `max_price=${this.state.max_price}`;
    const sort = `sort=${this.state.sort}`;
    const view = `view=${this.state.view}`;
    history.push(
      `/${match.params.city}/${match.params.category}?${minPrice}&${maxPrice}&${sort}&${view}`
    );
  };

  renderItems = () => {
    const { match } = this.props;
    const filteredItems = items.filter(
      (item) =>
        item.city === match.params.city &&
        item.category === match.params.category
    );

    if (filteredItems.length > 0) {
      return filteredItems.map((item, idx) => {
        return (
          <div key={idx} className="item">
            <a
              href={`/${match.params.city}/${match.params.category}/${item.listing}/${item.title}`}
            >
              <div
                className="image"
                style={{
                  backgroundImage: `url(${item.images[0]})`,
                }}
              >
                <div className="price">{item.price}</div>
              </div>
              <div className="details">
                <span className="far fa-star" />
                <h5>{item.title}</h5>
                <h6>{item.locality}</h6>
              </div>
            </a>
          </div>
        );
      });
    }

    return <div>No matching Listings found!</div>;
  };

  showMakeModelDropdown = () => {
    const { match } = this.props;

    if (match.params.listings === 'cars-and-trucks') {
      return (
        <>
          <div className="form-group make">
            <label>Make</label>
            <select
              name="make"
              className="make"
              onChange={this.handleFilterChange}
              value={this.state.make}
            >
              <option value="bmw">BMW</option>
              <option value="honda">Honda</option>
              <option value="toyota">Toyota</option>
            </select>
          </div>
          <div className="form-group model">
            <label>model</label>
            <select
              name="model"
              className="model"
              onChange={this.handleFilterChange}
              value={this.state.model}
            >
              <option value="m6">M6</option>
              <option value="camry">camry</option>
              <option value="civic">civic</option>
            </select>
          </div>
        </>
      );
    }
    return <div />;
  };

  handleFilterChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    // const { match, location, history } = this.props;
    return (
      <div className="listings-page">
        <div className="container">
          <section id="filter">
            <div className="form-group price">
              <label>Price</label>
              <div className="min-max">
                <select
                  name="min_price"
                  className="min-price"
                  onChange={this.handleFilterChange}
                  value={this.state.min_price}
                >
                  <option value="1000">0</option>
                  <option value="5000">5000</option>
                  <option value="10000">10000</option>
                </select>
                <select
                  name="max_price"
                  className="max-price"
                  onChange={this.handleFilterChange}
                  value={this.state.max_price}
                >
                  <option value="1000">10000</option>
                  <option value="1000">15000</option>
                  <option value="1000">20000</option>
                </select>
              </div>
            </div>
            {this.showMakeModelDropdown()}
            <div className="form-group button">
              <div className="primary-btn" onClick={this.submitFilters}>
                Update
              </div>
              <div className="reset-btn" onClick={this.resetFilters}>
                Reset
              </div>
            </div>
          </section>
        </div>
        <section id="list-view">
          <div className="container">
            <div className="white-box">
              <section className="change-view">
                <div className="form-group view-dropdown">
                  <select
                    name="view"
                    className="select-view"
                    onChange={this.handleFilterChange}
                    value={this.state.view}
                  >
                    <option value="gallery">Gallery View</option>
                    <option value="list">List View</option>
                    <option value="thumb">Thumb View</option>
                  </select>
                </div>
                <div className="form-group sort-dropdown">
                  <select
                    name="sort"
                    className="sort-dropdown"
                    onChange={this.handleFilterChange}
                    value={this.state.sort}
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </section>
              <section id="all-items">
                <div className="all-items">{this.renderItems()}</div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
