import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className='portfolio__intro section__padding id' id='intro'>
      <div className='portfolio__intro-content'>
        <h1 className='gradient__text'>
          Welcome to <br />
          Simen's Portfolio<br />
        </h1>
        <p className='gradient__text'>On this website you will be able to look into my life. We will start
           with an introduction to who I am. After that we will get into my hobbies,
           education, my projects and for last my very own picture gallery. </p>
        
        <div className='portfolio__intro-content__input'>
          <input type='text' placeholder='Your name' ></input>
          <button type='button' className='start'>Get started</button>
        </div>
      </div>
    </div>
  )
}

export default Intro