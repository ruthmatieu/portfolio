import React, { useState } from 'react';
import hero from '../images/profile-illustration.svg';
import diamond from '../images/icon-slider.png';
import { Link} from "react-router-dom";
import styled, { css, keyframes } from 'styled-components';
//components
import Works from './Portfolio';
import About from './About';
import Skills from './Skills';
import Footer from './Footer';
import Blog from './Blog';
import Instagram from './InstagramFooter';
import Lambda from './Lambda';


function Landing() {
  

  const PageFade = styled.div`
   
    opacity: 1;
    background-color: white;
  `
 
  const SlideUp = keyframes`
    0% {
      transform: translate(0);
      opacity: 0;
    }
    100% {
      transform: translate(0);
      opacity: 1;
    }
    `
    const FadeIn = keyframes`
      0% {
        opacity: 0;
        // transform: translate(0, 30px);
      }
      100% {
        opacity: 1;
        // transform: translate(0);
      }
      h1 {
        opacity: 0;
        animation: ${props => (props.animating === 'true' ? css`${SlideUp} ease-in-out forwards .5s;` : '')}
      }
      h2 {
        opacity: 0;
        animation: ${props => (props.animating === 'true' ? css`${SlideUp} ease-in-out forwards .5s;` : '')}
        animation-delay: .5s;
      }
      h3 {
        opacity: 0;
        animation: ${props => (props.animating === 'true' ? css`${SlideUp} ease-in-out forwards .5s;` : '')}
        animation-delay: 1s;
      }
  `

  const Container = styled.div`
    width: auto;
    align-items: center;
    animation: ${FadeIn} ease-in-out forwards 2.5s;
  `
    const aboutSection = [
      <About/>,
      <Works/>,
      <Instagram/>
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
        
        <Container className="intro-container">
        <PageFade/>
          <div className="socials">
            <a href="https://www.linkedin.com/in/ruthmatieu/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/alanna.code/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100008826826867" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://github.com/ruthmatieu" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://twitter.com/ruthmatieu" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <hr className="verticalLine"/>
          </div>
          <div className="left-intro">
              <img src={hero} alt="" className="landing-img"/>
          </div>
          <div className="right-intro">
            <div>
              <h1>Alanna Mathieu</h1>
              <h2>Web Developer at <Link to='/travelopia' className="btn-link">Travelopia</Link>. 
                Fullstack student at <Link to='/lambda-school' className="btn-link">Lambda School</Link>. Lover of code.</h2>
              <h3>specializing in front end frameworks such as React with a passion for Design Systems.</h3>
              <div className="arrow-btn">
                <a href="#portfolio" className="btn-link">View Works</a>
                <hr/>
              </div>
              
            </div>
            
          </div>
        </Container>
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