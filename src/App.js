import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Masthead from './components/Masthead';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Masthead/>
        <About/>
      </>
    );
  }
}

export default App;
