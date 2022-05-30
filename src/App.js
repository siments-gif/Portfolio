import React from 'react'
import {Footer, Education, About, Projects, Gallery, Intro} from './containers';
import {Cta, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg-1'>
          <Navbar />
      </div>
      <div className='gradient__bg'>
          <Intro /> 
      </div>   
      <div className='gradient__bg-1'>
      <About />
      </div>
      {/* <Brand />
      <Gallery />
      <Projects />
      <Cta />
      <Education />
      <Footer /> */}
    </div>
  )
}

export default App
