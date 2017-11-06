import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar'
import Banner from './Banner'
import IDidntKnow from './IDidntKnow'
import LearnMore from '../components/LearnMore'

class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar />
        <Banner />
        <IDidntKnow />
        <LearnMore />
      </div>
    );
  }
}

export default App;
