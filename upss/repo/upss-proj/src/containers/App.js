import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar'
import Banner from './Banner'
import IDidntKnow from './IDidntKnow'
import LearnMore from '../components/LearnMore'
import FeaturedMembers from './FeaturedMembers'
import Info from './Info'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar />
        <Banner />
        <IDidntKnow />
        <LearnMore />
        <FeaturedMembers />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default App;
