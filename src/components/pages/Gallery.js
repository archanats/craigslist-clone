import React, { Component } from 'react';

export default class Gallery extends Component {
  state = {
    allImages: [],
    currentImg: '',
    currentIndex: 0,
  };

  componentWillMount() {
    const allImages = [
      'https://images.unsplash.com/photo-1510903117032-f1596c327647?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
      'https://cdn.bmwblog.com/wp-content/uploads/2018/11/BMW-330i-Portimao-Blue-images-1.jpg',
      'https://cdn.carbuzz.com/gallery-images/1600/402000/800/402836.jpg',
      'https://cdn.bmwblog.com/wp-content/uploads/2018/11/BMW-330i-Portimao-Blue-images-1.jpg',
      'https://blog.consumerguide.com/wp-content/uploads/sites/2/2018/08/Screen-Shot-2018-08-01-at-4.08.22-PM-1024x595.png',
      'https://cdn.bmwblog.com/wp-content/uploads/2018/11/BMW-330i-Portimao-Blue-images-1.jpg',
    ];

    this.setState({
      allImages,
      currentImg: allImages[this.state.currentIndex],
    });
  }

  renderThumbnails = () => {
    return this.state.allImages.map((img, idx) => {
      return (
        <div
          key={idx}
          onClick={() => this.clickedThumb(idx)}
          className="thumb-img"
          style={{
            backgroundImage: `url("${img}")`,
          }}
        ></div>
      );
    });
  };

  nextBtn = () => {
    this.state.currentIndex !== this.state.allImages.length - 1 &&
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      });
  };

  prevBtn = () => {
    this.state.currentIndex !== 0 &&
      this.setState({
        currentIndex: this.state.currentIndex - 1,
      });
  };

  clickedThumb = (index) => {
    this.setState({
      currentIndex: index,
    });
  };

  render() {
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-image">
            <div className="arrow left-arrow" onClick={() => this.prevBtn()}>
              <span className="fas fa-chevron-left" />
            </div>
            <div className="arrow right-arrow" onClick={() => this.nextBtn()}>
              <span className="fas fa-chevron-right" />
            </div>
            <div
              className="image-1"
              style={{
                backgroundImage: `url("${
                  this.state.allImages[this.state.currentIndex]
                }")`,
              }}
            ></div>
          </div>
          <div className="thumbnails">{this.renderThumbnails()}</div>
        </div>
      </div>
    );
  }
}
