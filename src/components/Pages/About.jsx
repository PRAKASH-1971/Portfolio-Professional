import React from 'react'
import "../css/About.css"
import aboutsvg from "../images/undraw_programming_re_kg9v.svg"

function About() {
  return (
      <div className='about-div' >
        <h2 className='about-h2' id='about'>ABOUT</h2>
    <div className='about'>
        <img src={aboutsvg} alt="fbd" className='aboutsvg'/>
      <div className='about-right'>
          <p>
         Hi, I’m <span>👋</span> <span> <b> Prakash Dsouza </b></span> <br /> Frontend developer and UI / UX designer with hands-on experience in
            building web apps and websites from scratch from initial designs to
            development and all the way to hosting a complete production-ready
            software in a custom-configured server.
            <br />
            <hr />
            <i class="fas fa-location-arrow"></i>Manipal ,Karnataka 
          </p>

      </div>
    </div>
    </div>
  )
}

export default About