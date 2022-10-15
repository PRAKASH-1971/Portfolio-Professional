import React from 'react'
import "../css/Projects.css"

function Projects() {
  return (
    <div className='projects-div' id='projects'>
      <h2 style={{ textAlign: "center", fontSize: '30px' }}>Projects</h2>
      <div className="employee-container" >
        <div className="col-lg-4 employee-1">
          <div className="employee">
            <div className="employee-image tata">
              <img src="https://pbs.twimg.com/media/E_JZaX2VgAcfSaa.jpg" className="img-fluid d-block m-auto" alt="employee-image" />
            </div>
            <div className="employee-details">
              <div className="employee-name">

                <h1 style={{"fontSize":'23px',"margin":"5px 0px"}} className="text-center">TATA      1mg<br />
                  <span className="employee-role">HTML |  CSS |  JS </span><br />
                  <span className="employee-role" id='desc'>An web app featuring medical products</span>
                </h1>

              </div>
              <div className="employee-social-link">
                <ul>
                  <li><a target={"_blank"} href="https://github.com/PRAKASH-1971/1mg"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                  <li><a target={"_blank"} href="https://lambent-panda-5c50e9.netlify.app/"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                </ul>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 employee-1">
          <div className="employee">
            <div className="employee-image zee5">
              <img src="https://www.exchangewire.com/wp-content/uploads/2019/08/zee5-logo.jpeg" alt="zee5" />
            </div>
            <div className="employee-details">
              <div className="employee-name">

             <h1 style={{"fontSize":'23px',"margin":"5px 0px"}}className="text-center">ZEE5<br />
                  <span className="employee-role">HTML |  CSS |  REACT </span><br />
                  <span className="employee-role" id='desc'>A streaming service with variety of award-winning TV shows, movies.</span>
                </h1>


              </div>
              <div className="employee-social-link">
                <ul>
                  <li><a target={"_blank"} href="https://github.com/PRAKASH-1971/zee5-original"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                  <li><a target={"_blank"} href="https://zee5site.netlify.app/"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 employee-1">
          <div className="employee">
            <div className="employee-image mercury">
              <img 
              // src="https://i.imgur.com/sXCVJ24.jpg"
              src="https://previews.123rf.com/images/djvstock/djvstock1601/djvstock160103576/51405067-womens-make-up-and-cosmetics-graphic-design-.jpg"
               alt="zoomcar"/>
            </div>
            <div className="employee-details">
              <div className="employee-name">

              <h1 style={{"fontSize":'23px',"margin":"5px 0px"}} className="text-center">BLUE MERCURY<br />
                  <span className="employee-role">HTML |  CSS |  REACT </span><br />
                  <span className="employee-role " id='desc'>An web app featuring skin,spa and makeup products.</span>
                </h1>
              </div>
              <div className="employee-social-link">
                <ul>
                  <li><a target={"_blank"} href="https://github.com/Maddy-O/purring-root-8041"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                  <li><a target={"_blank"} href="https://affable-scissors-7552.vercel.app/"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects