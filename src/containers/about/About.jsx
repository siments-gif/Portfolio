import React from 'react'
import './About.css'
import me from '../../assets/me.png'

const About = () => {
  return (
    <div className='portfolio__about section__padding id' id='about'>
      <div className='portfolio__about-content'>
        <h1 className='gradient__text'>
          About me <br />
          <br />
        </h1>
        <p className='gradient__text'>
            Hi, my name is Simen. I am 23 years old. I'm a student in his last semester studying IT & Informationsystems.
            As a person I will describe myself as hardworking, creative, structual, entusiastic and always happy to learn new things.
             <br />
             <br />
            When I start working after graduating I want to work with front-end development. My reasoning for this is because I have always
            had an eye for design. Love anything that focuses on the visual aspects and how/why the the visual changes everything about anything.  
        </p>
      </div>
        <div className='portfolio__about-image'>
          <img src={me} alt='me' />
        </div>
    </div>
  )
}

export default About
