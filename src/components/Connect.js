import React from 'react'
import styled from 'styled-components';

const Connect = () => {
  return (
    <Con id='connect'>
      <h1>Contact</h1>
      <div className='social_media'>
        <a href='https://www.linkedin.com/in/david-biles/' target='blank'>
          <img src='/images/icons/linkedin-logo.png' alt='icon' />
        </a>
        <a href='web-development-resume.pdf' download>
          <img src='/images/icons/github.png' alt='icon' />
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
  height: 30vh;

  .social_media {
    display: flex;
    justify-content: center;
    width: 40%;
  }

  img {
    height: 50px;
    width: auto;
    border-radius: 5px;
    margin: 2%;
  }

  h1 {
    color: white;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid white;
    width: 15%;
    font-family: 'Nova Flat', cursive;
    font-size: 2.5em;
    letter-spacing: 0.3rem;
    margin-bottom: 2%;
    padding: 1%;
  }
`