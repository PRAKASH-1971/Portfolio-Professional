import React from 'react'
import "../css/Landing.css"
import { SocialIcon } from 'react-social-icons';
import {Button} from "@chakra-ui/react"


function Landing(){
  return (
<div className='landing' id='home' >
        <div className='text'>
          <p>Hi  <span className='hello'>👋</span>, I am </p>
          <br />
          <div class="wrapper">
            <div class="typing-demo">
            <b>  Prakash Dsouza</b>
              </div>
          </div>
          <br />
          <p>Frontend Developer <br /> & UI / UX Designer</p>

              <div className='aaaa'>
               <a className="btn btn-border-3" target={"_blank"} href="https://drive.google.com/file/d/1tt-62pQAsXBqqgfgfP4t2t995gaA-mNu/view?usp=sharing">
                {/* <Button> */}
                  Resume
                  {/* </Button> */}
                 </a>
               </div>

          {/* <SocialIcon url="https://whatsapp.com/jaketrent" /> */}
          <div className="media-logo">
          <a target={"_blank"} href="https://github.com/PRAKASH-1971">
            {/* <i className="fab fa-github" /> */}
          <SocialIcon className='SocialIcon' url="https://github.com/jaketrent" />
          </a>
          <a target={"_blank"} href="https://www.linkedin.com/in/prakash-dsouza-50570a228/">
            {/* <i className="fab fa-linkedin" /> */}
          <SocialIcon url="https://linkedin.com/jaketrent" />
          </a>
          <a target={"_blank"} href="https://twitter.com/Prakash83893080">
            {/* <i className="fab fa-twitter" /> */}
          <SocialIcon url="https://twitter.com/jaketrent" />
          </a>
          <a target={"_blank"} href="https://www.instagram.com/prakashdsouza1/">
          <SocialIcon url="https://instagram.com/jaketrent" />
            {/* <i className="fab fa-instagram" /> */}
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