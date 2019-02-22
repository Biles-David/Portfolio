import React from 'react'
import styled from 'styled-components';

const Skills = () => {
  return ( 
    <Tech>
      <div className='tech_info'>
        <h1> TECHNOLOGIES & SKILLS </h1>
        <span className='bar tech_bar'/>
        <div className='skills_container'>
          <div className='skills'>
            <p>React</p>
            <a href='https://reactjs.org' target='blank'>
              <img src='/images/icons/devIcons-01.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <p>Express</p>
            <a href='https://expressjs.com' target='blank'>
              <img src='/images/icons/devIcons-04.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <p>PostgresSQL</p>
            <a href='https://www.postgresql.org' target='blank'>
              <img src='/images/icons/devIcons-08.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <p>Node.js</p>
            <a href='https://nodejs.org/en' target='blank'>
              <img src='/images/icons/devIcons-09.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <p>ES6+</p>
            <a href='https://es6.io' target='blank'>
              <img src='/images/icons/devIcons-03.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <p>NPM</p>
            <a href='https://www.npmjs.com' target='blank'>
              <img src='/images/icons/devIcons-10.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <p>Vue.js</p>
            <a href='https://vuejs.org' target='blank'>
              <img src='/images/icons/devIcons-05.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <p>Git + GitHub</p>
            <a href='https://git-scm.com' target='blank'>
              <img src='/images/icons/devIcons-06.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <p>Redux</p>
            <a href='https://redux.js.org' target='blank'>
              <img src='/images/icons/devIcons-14.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <p>Socket.io</p>
            <a href='https://socket.io' target='blank'>
              <img src='/images/icons/devIcons-07.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <p>HTML5</p>
            <a href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' target='blank'>
              <img src='/images/icons/devIcons-15.svg' alt='skill logo'/>
            </a>
          </div>
          <div className='skills'>
            <p>CSS3</p>
            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3' target='blank'>
              <img src='/images/icons/devIcons-13.svg' alt='skill logo'/>
            </a>
          </div>
        </div>
      </div>
    </Tech>
  );
}

export default Skills;

const Tech = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(25,25,25);
  box-shadow: 0px 0px 20px 20px rgba(25,25,25, 1);
  padding-bottom: 3%;
  height: 80vh;
  width: 100vw;
  color: white;
  z-index: 2;

  .tech_info {
    display: flex;
    flex-direction: column;
    height: 60vh;
    width: 80%;
  }

  h1 {
    font-family: 'Nova Flat', cursive;
    font-size: 2.5em;
    margin: 0 3%;
    letter-spacing: 0.3rem;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }

  img {
    height: auto;
    width: 10em;
  }
`