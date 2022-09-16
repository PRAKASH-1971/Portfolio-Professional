import React from 'react'
import "../css/Landing.css"
import img from "../images/STV_1203___4x6-removebg-preview.png"


function Landing(){
  return (
<div className='landing' id='home' >
        <div className='text'>
          <p>Hi, I am <span className='hello'>👋</span> </p>
          <br />
          <div class="wrapper">
            <div class="typing-demo">
            <b>  Prakash Dsouza</b>
              </div>
          </div>
          <br />
          <p>Frontend Developer <br /> & UI / UX Designer</p>

              <div className='aaaa'>
               <a className="btn btn-border-3" href="https://drive.google.com/file/d/1FxPJA6T0GZ7LtejBa366bp5GMestLNn9/view?usp=sharing"> Resume</a>
               </div>

          <div className="media-logo">
          <a href="https://github.com/PRAKASH-1971">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/prakash-dsouza-50570a228/">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://twitter.com/Prakash83893080">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com/prakashdsouza1/">
            <i className="fab fa-instagram" />
          </a>
          </div>
        </div>
        <div className="image">
          <div className="frame">
          <img className="myimg" src={"https://i.ibb.co/yNXhdzF/STV-1203-4x6-removebg-preview-2-removebg-preview.png"} alt="My pic" />
          </div>
        </div>


      </div>  
      
      )
}

export default Landing