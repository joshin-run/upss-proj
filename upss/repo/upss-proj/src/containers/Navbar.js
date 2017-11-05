import React, { Component } from 'react';
import NavLogo from '../components/NavLogo'
import menuIcon from '../images/icons/hamburger.svg'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <NavLogo />
        <img className="mobile-menu-icon" src={menuIcon} />
      </div>
    );
  }
}

export default Navbar;
