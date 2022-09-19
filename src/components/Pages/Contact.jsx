import React from 'react'
import "../css/Contact.css"
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import { useState } from "react";



function Contact() {
  const [text, setText] = useState("Click To Copy");
  function copyMail() {
    navigator.clipboard.writeText("prakashdsouza077@gmail.com");
    setText("Text Copied");
    setTimeout(() => {
      setText("Click To Copy");
    }, 2000);
  }
  function copyPhone() {
    navigator.clipboard.writeText("+916360243612");
    setText("Text Copied");
    setTimeout(() => {
      setText("Click To Copy");
    }, 2000);
  }
  return (
    <div className='contact-div' id='contact'>
        <h2 style={{textAlign:"center"}}>Contact</h2>
        <div className='contactt'>
        <div className="contact">
        <div className="contact-card card1">
          <h1>MAIL ME</h1>
          <div className='emailme'>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-disabled">{text}</Tooltip>}
          >
            <span className='eemail' onClick={() => copyMail()}>prakashdsouza077@gmail.com</span>
          </OverlayTrigger>
          </div>
        </div>
        <div className="contact-card">
          <h1>CALL ME</h1>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-disabled">{text}</Tooltip>}
          >
            <span onClick={() => copyPhone()}>+91 6360243612 </span>
          </OverlayTrigger>
        </div>
      </div>
         
        <div className="login-box">
  <form>
    <div className="user-box">
       <input type="email" name="" required=""/>
       <label style={{fontSize:"15px",margin:"-10px 0px"}}>Email</label>
    </div>
    <div className="user-box">
       <input type="text" name="" required=""/>
       <label style={{fontSize:"15px",margin:"-10px 0px"}}>Message</label>
    </div>
    <a href="/">
       <span></span>
       <span></span>
       <span></span>
       <span></span>
       SEND
    </a>
  </form>
</div>
        </div>
    </div>
  )
}

export default Contact