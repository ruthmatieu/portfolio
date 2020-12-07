import React, { useState } from 'react';
import hero from '../images/profile-illustration.svg';
import diamond from '../images/icon-slider.png';
import { Link} from "react-router-dom";
//
import Works from './Works';
import About from './About';
import Skills from './Skills';
import Footer from './Footer';
import Blog from './Blog';

function Landing() {
    const aboutSection = [
      <About/>,
      <Works/>,
      <Footer/>
      ]
    const portfolioSection = [
      <Works/>,
      <Footer/>
      ]
    const skillsSection = [
      <Skills/>,
      <Footer/>
    ]
    
    const contactSection = [
      <Blog/>,
      <Footer/>
    ]

    const [intro, setIntro] = useState(aboutSection); 

  return (
    
    <div>
        
        <div className="intro-container">
          <div className="socials">
            <a href="https://www.linkedin.com/in/ruthmatieu/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/civil_co/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100008826826867" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/ruthmatieu" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://twitter.com/ruthmatieu" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <hr className="verticalLine"/>
          </div>
          <div className="left-intro">
              <img src={hero} alt="" className="landing-img"/>
          </div>
          <div className="right-intro">
            <div>
              <h1>Alanna Mathieu</h1>
              <h6>Web Developer at <Link to='/travelopia'>Travelopia</Link>. Fullstack student at Lambda School.</h6>
              <p>specializing in front end frameworks such as React with a passion for Design Systems, Web Accessibility, and Serverless Technologies.
              </p>
              <div className="arrow-btn">
                <a href="#portfolio">View Works</a>
                <hr/>
              </div>
              
            </div>
            
          </div>
        </div>
        <hr/>
        <div className="browser-only-intro">
          <p className="bio-adjuster">Adjust to see more:</p>
              <div className="landing-btn-div">
                <div className="landing-page-btn" 
                  onClick={()=> setIntro(aboutSection.map(item => (item)))}>
                    <span>
                      <img src={diamond} alt="diamond" className="diamond"/>
                    </span>
                </div>

                <div className="landing-page-btn" 
                  onClick={()=> setIntro(portfolioSection.map(item => (item)))}>
                    <span role="img">
                      <img src={diamond} alt="diamond" className="diamond"/>
                    </span>
                </div>

                <div className="landing-page-btn" 
                  onClick={()=> setIntro(skillsSection)}>
                    <span role="img">
                      <img src={diamond} alt="diamond" className="diamond"/>
                    </span>
                </div>

                <div className="landing-page-btn" 
                  onClick={()=> setIntro(contactSection)}>
                    <span role="img">
                      <img src={diamond} alt="diamond" className="diamond"/>
                    </span>
                </div>
              </div>
              <p className="bio-details">{intro}</p>
        </div>
        
    </div>
  );
}

export default Landing;