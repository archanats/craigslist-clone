import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import cities from '../data/cities';

export default class Header extends Component {
  state = {
    cityDropdown: false,
    selectedCity: 'New York City',
  };

  clickDropdownCity = () => {
    this.setState({
      cityDropdown: !this.state.cityDropdown,
    });
  };

  selectCity = (city) => {
    this.setState(
      {
        selectedCity: city,
      },
      () => {
        const { history } = this.props;
        let city = cities.filter(
          (city) => city.title === this.state.selectedCity
        )[0];
        history.push(`/${city.slug}`);
      }
    );
  };

  cities = () => {
    return cities.map((city, idx) => {
      return (
        <li
          key={idx}
          value={city.slug}
          onClick={() => this.selectCity(city.title)}
        >
          {city.title}
        </li>
      );
    });
  };

  componentDidMount() {
    const { match } = this.props;
    let city = cities.filter((city) => city.slug === match.params.city)[0];

    this.setState({
      selectedCity: city.title,
    });
  }

  render() {
    const { match } = this.props;

    return (
      <header>
        <div className={'left-menu'}>
          <Link to={`/${match.params.city}`} className={'logo'}>
            Craigslist
          </Link>
          <div className={'city-dropdown'} onClick={this.clickDropdownCity}>
            {this.state.selectedCity}
            <span
              className={`fas ${
                this.state.cityDropdown ? 'fa-chevron-up' : 'fa-chevron-down'
              }`}
            />
            <div
              className={`scroll-area ${
                this.state.cityDropdown ? 'active' : ''
              }`}
            >
              <ul>{this.cities()}</ul>
            </div>
          </div>
        </div>
        <div className={'right-menu'}>
          <div className={'post-btn'}>Login</div>
        </div>
      </header>
    );
  }
}
