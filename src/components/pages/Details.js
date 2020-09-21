import React, { Component } from 'react';

export default class Details extends Component {
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="details-page">
        <div className="container">
          <section className="submenu">
            <div className="direction">
              <div className="prev">prev</div>
              <div className="next">next</div>
            </div>
            <nav className="sub-links">
              <a href="#">More Ads by User</a>
              <a href="#">Share</a>
              <a href="#">Contact Seller</a>
            </nav>
          </section>
          <section>
            <div className="media-column">
              <div className="gallery">
                <div className="slider">
                  <div className="main-image">
                    <div className="left-arrow">{'<'}</div>
                    <div className="right-arrow">{'>'}</div>
                  </div>
                </div>
                <div className="thumbnails">
                  <div className="thumb-img">image</div>
                </div>
              </div>
            </div>
            <div className="details-column">
              <div className="date">Posted Sept 10th</div>
              <h3>Blue 2012 BMW</h3>
              <h4 className="price">$20000</h4>
              <div className="more-details">
                <div className="info">
                  <label>Vin</label>
                  <h5>VXUS5673333278</h5>
                </div>
                <div className="info">
                  <label>Mileage</label>
                  <h5>45000</h5>
                </div>
                <div className="info">
                  <label>transmission</label>
                  <h5>6 Speed Automatic</h5>
                </div>
              </div>
              <div className="description">
                <p>description</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
