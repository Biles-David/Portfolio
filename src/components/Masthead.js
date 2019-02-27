import React from 'react';
import styled, { keyframes } from 'styled-components';

const Masthead = () => {
  return (
    <Mast id='home'>
      <img src='https://firebasestorage.googleapis.com/v0/b/galaxy-routing.appspot.com/o/portfolio%2Fmasthead-shrink2.jpg?alt=media&token=b03ae54d-797c-4e29-8b35-3ebd68993f11' alt='masthead'/>
      <div className='cover'></div>
      <div className='fog'></div>
      <div>
        <div className='masthead_text'>
          <h1>DAVID BILES</h1>
          <h3>Web Developer</h3>
        </div>
      </div>
    </Mast>
  )
}

export default Masthead;

const fog = keyframes`
  0% {
    background-position:115% 50%
  }
  100% {
    background-position:-15% 50%
  }
`

const Mast = styled.div `
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  div {
    position: relative;
    top: -5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-family: 'Nova Flat', cursive;
    color: #e2e2e2;
  }

  .masthead_text {
    height: 40%;
    width: 1000px;
    background-image: linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6), rgba(0,0,0, 0.1), rgba(0,0,0,0.6), rgba(0,0,0,0.6));
    background-size: 400% 400%;
    animation: ${fog} 10s infinite;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  h1 {
    font-size: 5.5em;
    margin: 0;
    letter-spacing: 0.6rem;
  }

  h3 {
    font-size: 1.7em;
    letter-spacing: 0.2rem;
  }

  img {
    position: absolute;
    margin: auto;
    height: 100%;
    width: 2000px;
    overflow: hidden;
    image-rendering: auto;
    max-width: auto;
    z-index: -1;
  }

  .cover, .fog {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: rgba( 0, 0, 0, 0);
    z-index: -1;
  }
  @media (max-width: 750px) {
    h1 {
      font-size: 3em;
    }
    h3 {
      font-size: 1em;
    }
  }
  @media (max-width: 550px) {
    h1 {
      font-size: 2em;
    }
    h3 {
      font-size: 0.5em;
    }
  }
`