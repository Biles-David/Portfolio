import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Navbar = () => {

  const [scroll, updateScroll] = useState(0);
  const [menu, updateMenu] = useState(false);

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
      .scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  const handleMenu = () => {
    updateMenu(!menu)
  }

  if (scroll <= 2) {
    return (
      <Ham onClick={handleMenu}>
        <div className='ham_back'>
          <div className='ham_box'>
            <div id='hamburger' className={menu ? 'open' : null}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div id='drop' className={menu ? 'open' : null}>
          <div onClick={() => handleClick('home')}> TOP </div>
          <div onClick={() => handleClick('about')}> ABOUT </div>
          <div onClick={() => handleClick('portfolio')}> PORTFOLIO </div>
          <div onClick={() => handleClick('connect')}> CONTACT </div>
        </div>
      </Ham>
    )
  }

  return (
    <>
      <Nav>
        <div className='design_border'>
          <div className='design'>
            <div className='links'>
              <div onClick={() => handleClick('home')}> TOP </div>
              <div onClick={() => handleClick('about')}> ABOUT </div>
              <div onClick={() => handleClick('portfolio')}> PORTFOLIO </div>
              <div onClick={() => handleClick('connect')}> CONTACT </div>
            </div>
          </div>
        </div>
      </Nav>
      <Ham onClick={handleMenu}>
        <div className='ham_back'>
          <div className='ham_box'>
            <div id='hamburger' className={menu ? 'open' : null}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div id='drop' className={menu ? 'open' : null}>
          <div onClick={() => handleClick('home')}> TOP </div>
          <div onClick={() => handleClick('about')}> ABOUT </div>
          <div onClick={() => handleClick('portfolio')}> PORTFOLIO </div>
          <div onClick={() => handleClick('connect')}> CONTACT </div>
        </div>
      </Ham>
    </>
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

  position: fixed;
  top: 0;
  width: 90vw;
  height: 6vh;
  display: flex;
  padding: 0 5%;
  font-family: 'Varela Round', sans-serif;
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

  @media (max-width: 800px) {
    display: none;
  }
`

const Ham = styled.div`
  display: none;
  position: fixed;
  top: 0;
  z-index: 1000;
  cursor: pointer;
  width: 100vw;
  height: 7vh;

  .ham_back {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1%;
    width: 98%;
    height: 6vh;
    background: rgba(65, 65, 65);
  }

  .ham_box {
    position: absolute;
    right: 3px;
    top: 3px;
    height: 5vh;
    width: 3em;
  }

  #hamburger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 90%;
    background: white;
    border-radius: 5px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  #hamburger span:nth-child(1) {
    top: 10%;
  }

  #hamburger span:nth-child(2),#hamburger span:nth-child(3) {
    /* top: 13px; */
    top: 50%;
  }

  #hamburger span:nth-child(4) {
    /* top: 31px; */
    top: 85%;
  }

  #hamburger.open span:nth-child(1) {
    /* top: 13px; */
    top: 50%;
    width: 0%;
    left: 50%;
  }

  #hamburger.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #hamburger.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #hamburger.open span:nth-child(4) {
    /* top: 18px; */
    top: 50%;
    width: 0%;
    left: 50%;
  }

  #drop {
    position: absolute;
    display: flex;
    top: 6vh;
    flex-direction: column;
    align-items: flex-end;
    width: 96vw;
    height: auto;
    padding: 2%;
    background: rgba(45, 45, 45, 0.9);
    transform: translateY(-200px);
    transition: all 0.5s ease-in-out;
    z-index: -1;
    color: white;

    
    div {
      margin: 0.5% 0;
    }
  }

  #drop.open {
    transform: translateY(0);
    
    div {
      margin: 0.5% 0;
    }
  }

  @media (max-width: 800px) {
    display: block;
  }
`