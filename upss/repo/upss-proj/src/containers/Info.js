import React, { Component } from 'react';
import hexigonDoc from '../images/hexigonDoc.png'
import upssLogo from '../images/logos/upss-logo-text.png'
import aspsLogo from '../images/logos/ASPS_logo_300dpi.jpg'

class Info extends Component {
  render() {
    return (
      <div className="info-wrapper">
        <p className="info-section-title">
          Our Mission
        </p>
        <div className="our-mission-container">
          <img className="our-mission-image" src={hexigonDoc} />
          <div className="our-mission-content">
            <img className="upss-logo-text-info"  src={upssLogo} alt="UPSS" />
            <div className="our-mission-text">
              <p><span>The Utah Plastic Surgery Society’s mission is to:</span></p><br />
              <p>Encourage the highest possible standards in the field of plastic surgery</p><br />
              <p>Provide trustworthy information to prospective patients</p><br />
              <p>Protect the public from irresponsible and unqualified practitioners</p>
            </div>
          </div>
        </div>
        <p className="info-section-title">
          UPSS Membership
        </p>
        <div className="upss-membership-container">

        </div>
        <p className="info-section-title">
         American Society of<br />
         Plastic Surgeons
        </p>
        <div className="asps-container">

        </div>

      </div>
    );
  }
}

export default Info;
