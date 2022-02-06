import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Skills from "./skills"
import logo from './logo_black.png'
import Fade from "react-reveal/Fade"
const Navbar = () => {
  return (
    <Fade bottom>
    <div className="glass">
    <div className="section-top"
    style={{ boxShadow: "1px 3px 1px rgba(0,0,0,0.01)"}}>
      <div className="container">
        <div className="navbar-wrapper">
        
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            
          <img className="logo" height="50" width="50" src={logo} alt="css"></img>
          
          </div>
          
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#skills")}>Skills</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </Fade>
  )
}

export default Navbar
