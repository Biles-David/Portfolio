import React from 'react'
import styled from 'styled-components';

const Connect = () => {
  return (
    <Con id='connect'>
      <h1>Contact</h1>
      <div className='connect_info'>
        <p>dlbiles1994@gmail.com</p>
        <p>(817) 948-1091</p>
      </div>
      <div className='social_media'>
        <a href='https://www.linkedin.com/in/david-biles/' target='blank'>
          <img src='/images/icons/linkedin-logo.png' alt='icon' />
          <span/>
        </a>
        <a className='mail_icon' href='mailto: dlbiles1994@gmail.com'>
          <img src='/images/icons/mail-envelope.png' alt='icon' />
          <span/>
        </a>
        <a href='https://github.com/Biles-David' target='blank'>
          <img className='icon' src='/images/icons/github.png' alt='icon' />
          <span/>
        </a>
      </div>
    </Con>
  );
}

export default Connect;

const Con = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(45,45,45);
  box-shadow: 0px 0px 20px 20px rgba(45,45,45, 1);
  height: 35vh;
  padding: 30px;

  .social_media {
    display: flex;
    justify-content: center;
    width: 300px;

    a {
      position: relative;
      margin: 0 10px;
    }
  }

  .mail_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 5px;
    height: 50px;
    width: 50px;

    img {
      height: 42px;
      width: 42px;
    }
  }

  img {
    height: 50px;
    width: auto;
    border-radius: 5px;
    margin: 2%;
  }

  span {
    opacity: 0;
    position: absolute;
    top: 0;
    height: 100%;
    width: 102%;
    background: rgba(209, 59, 59, 0.4);
    border-radius: 5px;
  }

  span:hover {
    opacity: 1;
  }

  h1 {
    color: white;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid white;
    width: 200px;
    font-family: 'Nova Flat', cursive;
    font-size: 2.5em;
    letter-spacing: 0.3rem;
    padding: 1%;
    margin: 0;
  }

  .connect_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin: 0.5%;
  }
`