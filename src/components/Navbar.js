import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <div className='links'>
        <a href='#about'> ABOUT </a>
        <h5> PORTFOLIO </h5>
        <h5> CONTACT </h5>
      </div>
    </Nav>
  )
}

export default Navbar;

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 90vw;
  height: 7vh;
  display: flex;
  padding: 0 5%;
  font-family: 'Varela Round', sans-serif;
  z-index: 10;
  color: #e2e2e2;

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
    position: absolute;
    right: 0;
    justify-content: flex-end;
    margin: 1.5%;
    width: 20%;
    list-style: none;
    
    h5 {
      margin: 0 5%;
      font-size: 1em;
    }
  }
`