import React from 'react'
import styled from 'styled-components';

const Portfolio = () => {
  return (
    <Port>
      <div className='fog'></div>
      <div className='portfolio_main'>
        <div className='portfolio_back personal'>
          <div className='portfolio_info'>
            <h1>Galaxy Routing</h1>
            <p> An app for small businesses with drivers to easily and simply manage display routes </p>
            <ul>
              <li>A personal project created during my time at DevMountain</li>
              <li>Utilized Google Maps API and Directions Services to render live data for admins to create routes. This feature allows for drag and drop rearranging and additions to the route list side that sends the info to the Google API to render the appropriate information</li>
              <li>Intentionally designed user interface for simplicity to require little to no training to use</li>
              <li>Built in capabilities for admins to see which step a user is on in real-time</li>
              <li>Self-taught Firebase storage to import personal photos linked to their user profile</li>
            </ul>
          </div>
          <span className='border' />
          <img src='/images/galaxy-routing-login.png' alt='galaxy-routing' />
        </div>
        <div className='portfolio_back group'>
          <img src='/images/request-page-4.png' alt='all.4.g' />
          <span className='border' />
          <div className='portfolio_info'>
            <h1> ALL.4.G.</h1>
            <p>A web application for gamers to find or organize gaming groups around specific games</p>
            <ul>
              <li>A group project with two other individuals created during my time at DevMountain</li>
              <li>Primarily responsible for buildout of chat capabilities, which were built using Socket.io </li>
              <li>Developed functionality to display all active users in gaming groups</li>
              <li>Self-taught Material UI and Styled Components to create seamless design</li>
            </ul>
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
  padding: 4%;
  justify-content: center;
  align-items: center;
  height: auto;
  background: url('/images/about-background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .portfolio_back {
    padding: 2%;
    margin: 2%;
    display: flex;
    align-items: center;
    height: 42vh;
    background: rgba( 250, 250, 250, 0.9);
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

  .personal {
    justify-content: flex-end;
  } 

  .group {
    justify-content: flex-start;
  }

  .fog {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba( 0, 0, 0, 0.2);
  }

  .portfolio_main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }
`