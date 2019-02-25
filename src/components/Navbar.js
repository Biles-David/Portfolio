import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Navbar = () => {

  const [scroll, updateScroll] = useState(0);

  const setDimensions = () => {
    updateScroll(window.scrollY)
  };

  useEffect(() => {
    window.addEventListener('scroll', setDimensions)
    return window.addEventListener('scroll', setDimensions)
  }, []);

  const handleClick = e => {
    document
      .getElementById(e)
      .scrollIntoView({block: 'start', behavior: 'smooth'})
  }

  if (scroll <= 2) {
    return (
      <div />
    )
  }

  return (
    <Nav>
      <div className='design_border'>
      <div className='design'>
        <div className='links'>
          <div onClick={ () => handleClick('home')}> TOP </div>
          <div onClick={ () => handleClick('about')}> ABOUT </div>
          <div onClick={ () => handleClick('portfolio')}> PORTFOLIO </div>
          <div onClick={ () => handleClick('connect')}> CONTACT </div>
        </div>
      </div>
      </div>
    </Nav>
  )
}

export default Navbar;

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Nav = styled.div`
  display: none;
  position: fixed;
  top: 0;
  width: 90vw;
  height: 6vh;
  display: flex;
  padding: 0 5%;
  font-family: 'Varela Round', sans-serif;
  /* font-family: 'Nova Flat', cursive; */
  z-index: 10;
  color: #e2e2e2;
  animation: ${fadeIn} 0.2s linear;

  .design {
    display: flex;
    justify-content: center;
    width: 99%;
    height: 98%;
    background: rgba(45, 45, 45, 0.9);
    clip-path: polygon(15% 100%, 85% 100%, 100% 0, 0 0);
  }

  .design_border {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    right: 20%;
    width: 60%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    clip-path: polygon(15% 100%, 85% 100%, 100% 0, 0 0);
  }

  a {
    margin: 0 5%;
    font-size: 1em;
    color: white;
    text-decoration:none;
  }

  h1 {
    margin-top: 5px;
    font-size: 1.5em;
  }

  .links {
    display: flex;
    justify-content: center;
    margin: 1.5%;
    width: 50%;
    
    div {
      margin: 0 5%;
      font-size: 1em;
    }

    div:hover {
      cursor: pointer;
      color: rgb(97, 218, 251);
      border-bottom: 2px solid rgb(97, 218, 251);
    }
  }
`