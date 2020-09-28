import React, { Component } from 'react';

export default class Listings extends Component {
  renderItems = () => {
    const data = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 10, 20];
    return data.map((item, idx) => {
      return (
        <div key={idx} className="item">
          <div className="image">
            <div className="price">$8900</div>
            image
          </div>
          <div className="details">
            <span className="far fa-star" />
            <h5>2012 BMW M3</h5>
            <h6>Jackson Heights</h6>
          </div>
        </div>
      );
    });
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
                <select name="min-price" className="min-price">
                  <option value="1000">0</option>
                </select>
                <select name="max-price" className="max-price">
                  <option value="1000">1000</option>
                </select>
              </div>
            </div>
            <div className="form-group make">
              <label>Make</label>
              <select name="make" className="make">
                <option value="bmw">bmw</option>
              </select>
            </div>
            <div className="form-group model">
              <label>model</label>
              <select name="model" className="model">
                <option value="bmw">bmw</option>
              </select>
            </div>
            <div className="form-group button">
              <div className="primary-btn">Update</div>
              <div className="reset-btn">Reset</div>
            </div>
          </section>
        </div>
        <section id="list-view">
          <div className="container">
            <div className="white-box">
              <section className="change-view">
                <div className="form-group view-dropdown">
                  <select name="select-view" className="select-view">
                    <option value="gallery">Gallery View</option>
                    <option value="list">List View</option>
                    <option value="thumb">Thumb View</option>
                  </select>
                </div>
                <div className="form-group sort-dropdown">
                  <select name="sort-dropdown" className="sort-dropdown">
                    <option value="gallery">Newest</option>
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
