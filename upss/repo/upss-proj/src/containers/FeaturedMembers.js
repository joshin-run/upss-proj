import React, { Component } from 'react';

class FeaturedMembers extends Component {
  render() {
    return (
      <div className="featured-members-wrapper">
        <p className="page-header">Featured Members</p>
        <p className="header-sub-title">All Society Members</p>
        <p className="header-sub-title">are Board Certified By</p>
        <a href="https://www.plasticsurgery.org/"><p className="content">The American Board of Plastic Surgery</p></a>
      </div>
    );
  }
}

export default FeaturedMembers;
