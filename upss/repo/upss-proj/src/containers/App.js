import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar'
import Banner from './Banner'
import IDidntKnow from './IDidntKnow'
import LearnMore from '../components/LearnMore'
import FeaturedMembers from './FeaturedMembers'

class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar />
        <Banner />
        <IDidntKnow />
        <LearnMore />
        <FeaturedMembers />
      </div>
    );
  }
}

export default App;
