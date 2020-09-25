import React, { Component } from 'react';
import Gallery from './Gallery';

export default class Details extends Component {
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="details-page">
        <div className="container">
          <div className="white-box">
            <section className="submenu">
              <div className="direction">
                <a href="#" className="prev">
                  prev
                </a>
                <a href="#" className="next">
                  next
                </a>
              </div>
              <nav className="sub-links">
                <a href="#">More Ads by User</a>
                <a href="#">Share</a>
                <a href="#">Contact Seller</a>
              </nav>
            </section>
            <section className="content">
              <div className="media-column">
                <Gallery />
              </div>
              <div className="details-column">
                <div className="date">Posted Sept 10th</div>
                <h3 className="title">Blue 2012 BMW</h3>
                <h4 className="price">$30,000</h4>
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
                  <label>Description</label>
                  <p>
                    Ipsum ex eiusmod ex veniam non nisi sint excepteur
                    reprehenderit consectetur amet mollit anim. Eu sunt aliqua
                    laborum ad ex ipsum proident duis. Lorem do laboris sit
                    consequat cillum fugiat elit minim fugiat. Quis magna ea
                    nisi consectetur dolor dolor minim anim Lorem sint sit
                    laborum tempor.
                  </p>
                  <p>
                    Ipsum ex eiusmod ex veniam non nisi sint excepteur
                    reprehenderit consectetur amet mollit anim. Eu sunt aliqua
                    laborum ad ex ipsum proident duis. Lorem do laboris sit
                    consequat cillum fugiat elit minim fugiat. Quis magna ea
                    nisi consectetur dolor dolor minim anim Lorem sint sit
                    laborum tempor.
                  </p>
                  <p>
                    Velit deserunt adipisicing voluptate proident ut excepteur
                    duis occaecat. Nisi occaecat labore qui dolor exercitation
                    exercitation laboris sint dolor occaecat et. Nostrud amet
                    aliquip adipisicing aliquip ut tempor eiusmod tempor ad
                    pariatur cillum. Tempor officia minim commodo culpa ullamco
                    ex esse. Incididunt cupidatat cupidatat id cupidatat. Sit
                    pariatur eu qui exercitation sit do aliqua in excepteur
                    irure dolore aliquip.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
