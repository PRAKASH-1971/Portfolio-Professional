import React from 'react'
import About from './About'
import Contact from './Contact'
import Landing from './Landing'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'

const Home = () => {
  return (
    <div className='mains'>
      <div id='navbar-main'>
      <Navbar />
      </div>
      <div className='remaining'>
      <Landing/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  )
}

export default Home
