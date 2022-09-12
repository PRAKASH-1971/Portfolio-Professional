import React from 'react'
import "../css/Projects.css"

function Projects() {
  return (
    <div className='projects-div' id='projects'>
      <h2 style={{ textAlign: "center", fontSize: '30px' }}>Projects</h2>
      <div className="employee-container" >
        <div className="col-lg-4 employee-1">
          <div className="employee">
            <div className="employee-image">
              <img src="https://www.fastrack.in/wps/wcm/connect/fastrack/fa9b2a68-1f85-4f2a-8bcf-19202c2ea8ef/1080x1080_tunes.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-fa9b2a68-1f85-4f2a-8bcf-19202c2ea8ef-nZ1av9V" className="img-fluid d-block m-auto" alt="employee-image" />
            </div>
            <div className="employee-details">
              <div className="employee-name">

                <h1 className="text-center">FASTRACK<br />
                  <span className="employee-role">HTML |  CSS |  JS </span><br />
                  <span className="employee-role" id='desc'>An web app featuring with variety  of Fastrack watches, backpacks.</span>
                </h1>

              </div>
              <div className="employee-social-link">
                <ul>
                  <li><a href="https://github.com/PRAKASH-1971/FASTRACK_SITE"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                  <li><a href="https://graceful-seahorse-a6478e.netlify.app/"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                </ul>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 employee-1">
          <div className="employee">
            <div className="employee-image">
              <img src="https://www.exchangewire.com/wp-content/uploads/2019/08/zee5-logo.jpeg" alt="zee5" width="80%" height="80%" />
            </div>
            <div className="employee-details">
              <div className="employee-name">

             <h1 className="text-center">ZEE5<br />
                  <span className="employee-role">HTML |  CSS |  REACT </span><br />
                  <span className="employee-role" id='desc'>A streaming service with variety of award-winning TV shows, movies.</span>
                </h1>


              </div>
              <div className="employee-social-link">
                <ul>
                  <li><a href="https://github.com/PRAKASH-1971/zee5-original"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                  <li><a href="https://zee5site.netlify.app/"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 employee-1">
          <div className="employee">
            <div className="employee-image mercury">
              <img src="https://www.ezcomsoftware.com/wp-content/uploads/2017/10/big-bluemercury.png" alt="zoomcar"/>
            </div>
            <div className="employee-details">
              <div className="employee-name">

              <h1 className="text-center">BLUE MERCURY<br />
                  <span className="employee-role">HTML |  CSS |  REACT </span><br />
                  <span className="employee-role " id='desc'>An Rental web app featuring skin,spa and makeup products</span>
                </h1>
              </div>
              <div className="employee-social-link">
                <ul>
                  <li><a href="https://github.com/Maddy-O/purring-root-8041"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                  <li><a href="https://affable-scissors-7552.vercel.app/"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
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