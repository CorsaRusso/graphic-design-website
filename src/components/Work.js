import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Work = () => {
  return (
    <div style={{justifyContent:"center"}}>
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
        <Fade bottom>
            <a 
              href="https://www.youtube.com/" target="_blank"
              className="primary-btn2"
            >
              SEE MORE
            </a>
    </Fade>
      </div>

    </div>


    </div>
    
    
  )
}

export default Work
