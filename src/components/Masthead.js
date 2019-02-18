import React from 'react';
import styled from 'styled-components';


const Masthead = () => {
  return (
    <Mast>
      <img src='/images/masthead.jpg' alt='masthead'/>
      <div className='cover'></div>
      <div>
        <h1>DAVID BILES</h1>
        <h3>Web Developer</h3>
      </div>
    </Mast>
  )
}

export default Masthead;

const Mast = styled.div `
  position: relative;
  height: 100vh;
  width: 100vw;

  div {
    position: relative;
    top: -5%;
    display: flex;
    flex-direction: column
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-family: 'Varela Round', sans-serif;
    color: #e2e2e2;
  }

  h1 {
    font-size: 5em;
    z-index: 5;
    margin: 0;
    background: -webkit-linear-gradient(rgba(255,255,255, 1),rgba(255,255,255,0.2));
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  img {
    position: absolute
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  .cover {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: rgba( 0, 0, 0, .5);
    z-index: -1;
  }
`