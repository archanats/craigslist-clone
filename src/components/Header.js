import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className={'left-menu'}>
          <div className={'logo'}> Craigslist</div>
          <div className={'city'}>
            New York City
            <span className={'fas fa-chevron-down'} />
          </div>
        </div>
        <div className={'right-menu'}>
          <div className={'user-image'}> img</div>
          <div className={'account-dropdown'}>
            my account <span className={'fas fa-chevron-down'} />
          </div>
          <div className={'post-btn'}>Post to Classifieds</div>
        </div>
      </header>
    );
  }
}
