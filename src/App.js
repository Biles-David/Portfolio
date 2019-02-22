import React from 'react';
import Navbar from './components/Navbar';
import Masthead from './components/Masthead';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

const App  = () => {
  return (
    <>
      <Navbar/>
      <Masthead/>
      <About/>
      <Skills/>
      <Portfolio/>
    </>
  );
}

export default App;
