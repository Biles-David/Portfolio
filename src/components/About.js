import React from 'react';
import styled from 'styled-components';
import pdf from '../web-dev-resume.pdf';

const About = () => {
  return (
    <AboutMain id='about' >
      <div className='about_main'>
        <div className='about_info'>
          <h1>ABOUT ME</h1>
          <p> I have always had an interest in how things work, puzzle solving, and design. I have spent much of my time dissembling and rebuilding things such as computers. Web Development is a way to learn how websites operate behind the hood.
            Throughout my time at IBM I have enjoyed learning new technologies and honing my craft as a developer. Prior to my time as a developer I worked as a Security officer and an online Reseller where in both positions I was placed in a higher management position. </p>
          <p> I enjoy spending time with my beautiful wife and two sons, as well as gaming with my friends. Whether it be board games or video games.</p>
          <div className='about_resume'>
            <p> Download resume </p>
            <a href={pdf} download>here</a>
          </div>
        </div>
        <img src='https://firebasestorage.googleapis.com/v0/b/galaxy-routing.appspot.com/o/portfolio%2Fprofile-photo-shrink.jpg?alt=media&token=025af5d9-c75a-4a5b-84ec-16de8111deca' alt='profile' />
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

  .about_resume {
    display: flex;
    align-items: center;

    a {
      font-weight: bold;
      cursor: pointer;
      color: rgb(209, 59, 59);
      margin: 5px;
      text-decoration: none;
    }
  }
  
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
    margin-left: 6em;
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
      width: 260px;
      height: auto;
      font-family: 'Nova Flat', cursive;
      font-size: 2.5em;
      padding: 1%;
      letter-spacing: 0.3rem;
      margin-bottom: 2%;
    }
  }
  @media (max-width: 1200px) {
    height: auto;

    .about_main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column-reverse;
      height: auto;
      margin: 5%;
    }
    .about_info {
      height: auto;
    }

    img {
      margin: 0 auto;
      height: 400px;
      width: 600px;
    }
  }
  @media (max-width: 750px) {
    img {
      height: 200px;
      width: 300px;
    }

    .about_info {
      width: 100%;
      
      h1 {
        font-size: 1.5em;
        width: 180px;
      }
    }
  }
`;