import React from 'react'
import "../css/About.css"
import aboutsvg from "../images/undraw_programming_re_kg9v.svg"

function About() {
  return (
      <div className='about-div' >
    <div className='about'>
        <img src={"https://media3.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif?cid=ecf05e47g1l4djy4u0bv03rutshkeuqwwitg5mdqibe5rd02&rid=giphy.gif&ct=g"} alt="fbd" className='aboutsvg'/>
      <div className='about-right'>
        <h1 className='about-h2' id='about'>ABOUT</h1>
          <p>
         Hi, I’m <span>👋</span> <span> <b> Prakash Dsouza </b></span> <br /> Frontend developer and UI / UX designer with hands-on experience in
            building web apps and websites from scratch from initial designs to
            development and all the way to hosting a complete production-ready
            software in a custom-configured server.
            <br />
            <hr />
            <lord-icon
    src="https://cdn.lordicon.com/fihkmkwt.json"
    trigger="hover"
    style={{"width":"50px","height":"50px","marginTop":"-10px"}}>
</lord-icon> Manipal ,Karnataka 
          </p>

      </div>
    </div>
    </div>
  )
}

export default About