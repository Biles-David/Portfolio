import React from 'react';
import Navbar from './components/Navbar';
import Masthead from './components/Masthead';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Connect from './components/Connect';

const App = () => {
  return (
    <>
      <Navbar/>
      <Masthead />
      <About />
      <Skills />
      <Portfolio />
      <Connect />
    </>
  );
}

export default App;
