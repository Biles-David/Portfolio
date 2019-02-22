import React from 'react'
import styled from 'styled-components';

const Portfolio = () => {
  return ( 
    <Port>
      <div className='fog'></div>
      <div className='portfolio_main'>
      </div>
    </Port> 
  );
}

export default Portfolio;

const Port = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: url('/images/about-background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .fog {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba( 0, 0, 0, 0.35);
  }

  .portfolio_main {
    /* background: blue; */
    height: 90%;
    width: 90%;
  }
`