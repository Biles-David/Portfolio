import React from 'react'
import styled, { keyframes } from 'styled-components';

const Skills = () => {
  return ( 
    <Tech>
      <div className='tech_info'>
        <h1> TECHNOLOGIES & SKILLS </h1>
        <div className='skills_container'>
          <div className='skills'>
            <div className='icon_name'>
              <p>ES6+</p>
            </div>
            <a href='https://es6.io' target='blank'>
              <img src='/images/icons/devIcons-03.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <div className='icon_name'>
              <p>React</p>
            </div>
            <a href='https://reactjs.org' target='blank'>
              <img src='/images/icons/devIcons-01.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <div className='icon_name'>
              <p>Express</p>
            </div>
            <a href='https://expressjs.com' target='blank'>
              <img src='/images/icons/devIcons-04.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <div className='icon_name'>
              <p>PostgresSQL</p>
            </div>
            <a href='https://www.postgresql.org' target='blank'>
              <img src='/images/icons/devIcons-08.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <div className='icon_name'>
              <p>Node.js</p>
            </div>
            <a href='https://nodejs.org/en' target='blank'>
              <img src='/images/icons/devIcons-09.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <div className='icon_name'>
              <p>NPM</p>
            </div>
            <a href='https://www.npmjs.com' target='blank'>
              <img src='/images/icons/devIcons-10.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <div className='icon_name'>
              <p>Vue.js</p>
            </div>
            <a href='https://vuejs.org' target='blank'>
              <img src='/images/icons/devIcons-05.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <div className='icon_name'>
              <p>Git + GitHub</p>
            </div>
            <a href='https://git-scm.com' target='blank'>
              <img src='/images/icons/devIcons-06.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <div className='icon_name'>
              <p>Redux</p>
            </div>
            <a href='https://redux.js.org' target='blank'>
              <img src='/images/icons/devIcons-14.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <div className='icon_name'>
              <p>Socket.io</p>
            </div>
            <a href='https://socket.io' target='blank'>
              <img src='/images/icons/devIcons-07.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <div className='icon_name'>
              <p>HTML5</p>
            </div>
            <a href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' target='blank'>
              <img src='/images/icons/devIcons-15.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <div className='icon_name'>
              <p>CSS3</p>
            </div>
            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3' target='blank'>
              <img src='/images/icons/devIcons-13.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <div className='icon_name'>
              <p>Styled components</p>
            </div>
            <a href='https://www.styled-components.com/' target='blank'>
              <img className='styled_components' src='/images/icons/devIcons-16.png' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <div className='icon_name'>
              <p>Material UI</p>
            </div>
            <a href='https://material-ui.com/' target='blank'>
              <img className='material_ui' src='/images/icons/material-ui.png' alt='skill logo'/>
            </a>
          </div>
        </div>
      </div>
    </Tech>
  );
}

export default Skills;

const slide = keyframes`
  0% {
    transform: translateX(-50px) translateY(-20px)
  }
  70% {
    transform: translateX(7px) translateY(5px)
  }
  100% {
    transform: translateX(0px) translateX(0px)
  }
`

const Tech = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(45,45,45);
  box-shadow: 0px 0px 20px 20px rgba(45,45,45, 1);
  padding-bottom: 3%;
  height: auto;
  width: 100vw;
  color: white;
  z-index: 2;

  .tech_info {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  h1 {
    display: flex;
      justify-content: center;
      border-bottom: 2px solid white;
      width: 55%;
      font-family: 'Nova Flat', cursive;
      font-size: 2.5em;
      letter-spacing: 0.3rem;
      margin-bottom: 2%;
      padding: 1%;
  }

  .tech_bar {
    margin: 20px;
    border: 0.5px solid white;
    width: 42%;
  }

  .skills_container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .skills {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }

  .icon_name {
    visibility: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
  }
  
  .material_ui {
    height: 120px;
    width: auto;
    margin: 12px;
  }

  .styled_components {
    height: 120px;
    width: 120px;
    border: 1px solid white;
  }

  .skills:hover {
    
    img {
      opacity: 0.2;
    }
    
    .icon_name {
      animation: ${slide} 0.25s ease;
      animation-iteration-count: 1;
      visibility: visible;
      color: rgba( 250, 250 ,250 ,1 );
    }
  }

  img {
    height: auto;
    width: 10em;
  }
`;