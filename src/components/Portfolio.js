import React from 'react'
import styled from 'styled-components';

const Portfolio = () => {
  return (
    <Port id='portfolio'>
      <h1 className='portfolio_title'>Portfolio</h1>
      <div className='portfolio_main'>
        <div className='portfolio_back personal'>
          <div className='portfolio_info'>
            <div className='title'>
              <h1>Galaxy Routing</h1>
              <div>
                <span> Visit live site </span>
                <a href='http://galaxyrouting.com' target='blank'>here</a>
              </div>
            </div>
            <p>React | Google Maps API | Google Directions Services | Firebase Storage | Node</p>
            <p> An app for small businesses with drivers to easily and simply manage display routes </p>
            <p>A personal project created during my time at DevMountain Galaxy Routing utilizes Google Maps API and Directions services to render live data for admins to create routes for their user interface which is designed for simplicity to require little to no training to use.</p>
          </div>
          <span className='border' />
          <img src='/images/galaxy-routing-login.png' alt='galaxy-routing' />
        </div>
        <div className='portfolio_back group'>
          <img src='/images/request-page-4.png' alt='all.4.g' />
          <span className='border' />
          <div className='portfolio_info'>
            <div className='title'>
              <h1> ALL.4.G.</h1>
              <div>
                <span>Visit live site</span>
                <a href='http://localhost:3000'>here</a>
              </div>
            </div>
            <p>React Hooks | Socket.io | Material ui | Node</p>
            <p>A web application for gamers to find or organize gaming groups around specific games</p>
            <p>A group project with two other individuals created during my time at DevMountain ALL.4.G. Utilizes Socket.io to create instant visibility of players who have joined game groups, as well as create a chat feature within each group. Material UI and Styled Components to create seamless design</p>
          </div>
        </div>
      </div>
    </Port>
  );
}

export default Portfolio;

const Port = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 6% 4%;
  justify-content: center;
  align-items: center;
  height: auto;
  background: url('/images/about-background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .portfolio_title {
    color: white;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid white;
    width: 15%;
    font-family: 'Nova Flat', cursive;
    font-size: 2.5em;
    letter-spacing: 0.3rem;
    padding: 1%;
    margin: 2% 5%;
  }

  .portfolio_back {
    padding: 2%;
    margin: 2%;
    display: flex;
    align-items: center;
    height: 42vh;
    background: rgba( 230, 230, 230, 0.9);
    border: 2px solid black;
    border-radius: 5px;

    .portfolio_info {
      display: flex;
      flex-direction: column;
    }

    img {
      height: 100%;
      width: 48.7%;
      border-radius: 5px;
    }

    .border {
      height: 80%;
      border: 3px solid black;
      margin: 0 2%;
    }
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-weight: bold;
      cursor: pointer;
      color: rgb(97, 218, 251);
      margin: 5px;
      text-decoration: none;
    }
  }

  .personal {
    justify-content: flex-end;
  } 

  .group {
    justify-content: flex-start;
  }

  .portfolio_main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    z-index: 0;
  }
`