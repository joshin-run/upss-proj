import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar'
import Banner from './Banner'

class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar />
        <Banner />
      </div>
    );
  }
}

export default App;
