import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutMain id='about'>
      <div className='about_main'>
        <div className='about_info'>
          <h1>ABOUT ME</h1>
          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I have always had an interest in how things work, as well as puzzle solving. I have spent much of my time dissembling and rebuilding things such as computers. Web Development was a way to learn how websites operate behind the hood as well as a good way to advance my puzzle solving skills, which is what lead me into this interesting field. </p>
          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I also enjoy spending time with my beautiful wife and son, as well as gaming with my friends. I love learning new technologies and seeing what I am able to create.</p>
        </div>
        <img src='/images/profile.jpg' alt='profile'/>
      </div>
    </AboutMain>
  )
}

export default About;

const AboutMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
  background: rgb(45,45,45);
  box-shadow: 0px 0px 20px 20px rgba(45,45,45, 1);
  color: white;
  z-index: 1;

  .bar {
    margin: 20px;
    border: 0.5px solid white;
  }

  .about_main {
    display: flex;
    justify-content: space-between;
    height: 60vh;
    width: 80%;
  }

  .about_bar {
    width: 32%;
  }

  img {
    height: 80%;
    width: auto;
    border-radius: 5px;
  }

  .about_info {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;

    h1 {
      display: flex;
      justify-content: center;
      border-bottom: 2px solid white;
      width: 40%;
      font-family: 'Nova Flat', cursive;
      font-size: 2.5em;
      padding: 1%;
      letter-spacing: 0.3rem;
      margin-bottom: 2%;
    }
  }
`;