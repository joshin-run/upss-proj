import React, { Component } from 'react';
import Header from '../components/Header'

class Banner extends Component {
  render() {
    return (
      <div className="banner-wrapper">
        <div className="hero-banner">
          <Header />
        </div>
      </div>
    );
  }
}

export default Banner;
