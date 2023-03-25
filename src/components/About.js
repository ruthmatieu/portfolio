import React from "react";
import styled from 'styled-components';
import { keyframes } from 'styled-components'
import breakpoint from '../breakpoints';
import quotes from "../images/quotes.png";
import triangle from "../images/triangle.png";


const skills_one = [
  {
    title: 'JavaScript ES6+'
  },
  {
    title: 'Node'
  },
  {
    title: 'MySQL'
  }
]

const skills_two = [
  {
    title: 'TypeScript'
  },
  {
    title: 'Tailwind CSS'
  },
  {
    title: 'HTML/CSS'
  }
]

const skills_three = [
  {
    title: 'React'
  },
  {
    title: 'Azure'
  },
  {
    title: 'Storybook'
  }
]
const About = () => {
    return (
      <Container>
        <div className="wrapper">
          <div className="flex-container">
          
            <div className="info">
                <div className="mobile-intro">
                  <img src={quotes} alt="" className="quotes"/>
                  <p className="wave-hand text-4xl pb-2 font-light">Hi <span className="wave">👋🏾</span> I'm <span className="font-bold">Alanna</span>.</p>
              </div>
              <p className="fade-in">
              <span className="mobile-para">Hi there, my name is Alanna, and</span> I am a frontend software engineer with a passion for 
              developing intuitive and user-friendly interfaces that deliver exceptional user experiences. 
              Over the course of my career, I have had the opportunity to work on a variety of projects, 
              ranging from simple websites to complex web applications, using the latest frontend technologies. 
              I place a strong emphasis on collaboration and teamwork and work seamlessly with all aspects of the 
              team to deliver high-quality projects. Ultimately, my goal is to create visually stunning and engaging 
              user interfaces that exceed both the expectations of clients and end-users.
              </p>
            </div>
            <div className="tech-stack">
              <h3>Tech Stack</h3>
              <div className="skills">
                <div>
                  {skills_one.map((skill, i) => (
                    <div key={i} className="flex mb-2">
                      <div className="grid place-items-center">
                        <img src={triangle} alt="" className="w-4 h-4 mr-3"/>
                      </div>
                      <p>{skill.title}</p>
                    </div>
                  ))}
                </div>
                <div className="skills_two">
                  {skills_two.map((skill, i) => (
                    <div key={i} className="flex mb-2">
                      <div className="grid place-items-center">
                        <img src={triangle} alt="" className="w-4 h-4 mr-3"/>
                      </div>
                      <p>{skill.title}</p>
                    </div>
                  ))}
                </div>
                <div className="skills_two">
                  {skills_three.map((skill, i) => (
                    <div key={i} className="flex mb-2">
                      <div className="grid place-items-center">
                        <img src={triangle} alt="" className="w-4 h-4 mr-3"/>
                      </div>
                      <p>{skill.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> 
        </div>
      </Container>
    );
}
  
export default About;

const fadeInSlideUp = keyframes`
  0% { 
    opacity: 0;
    padding-top: 50px; 
  }
  100% { 
    opacity: 1;
    padding-bottom: 0px; 
  }
`
const wave = keyframes`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
  `
const Container = styled.section`

  .wave {
    animation-name: ${wave};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;  
    transform-origin: 70% 70%; 
    display: inline-block;
  }

  .fade-in {
    animation-name: ${fadeInSlideUp};
    animation-duration: 2s;
  }

  .wrapper {
    max-width: 1280px;
    overflow: hidden;
    margin: 0 auto;
    padding: 0;
    height: 60rem;
    display: grid;
    place-items: center;
  }

  .flex-container {
    width: 80%;
    padding: 4rem 0;
  }

  .info, .skills {
    color: #1F2937;
    font-size: 14px;
    line-height: 2rem;
    letter-spacing: 0.045rem;
  }

  .mobile-para {
    display: none;
  }

  .quotes {
    width: 40px;
  }

  .wave-hand {
    position: absoulte;
    top: 10px;
  }

  h3 {
    color: #7e898c;
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding: 3rem 0 2rem 0;
  }

  .skills {
    display: flex;
    justify-content: center;
  }

  .skills_two {
    padding-left: 2rem;
  }

  @media only screen and ${breakpoint.device.mobile} {

    .wrapper {
      height: 50rem;
    }
  }

  @media only screen and ${breakpoint.device.tablet} {

    .wrapper {
      height: 45rem;
    }

    .flex-container {
      width: 85%;
    }


  }

  @media only screen and ${breakpoint.device.desktop} {

    .wrapper {
      height: 35rem;
    }

    .flex-container {
      display: flex;
      width: 90%;
    }

    .info {
      width: 50%;
    }

    .tech-stack {
      width: 50%;
    }

    h3 {
      padding: 0 0 2rem 0;
    }

    .mobile-intro {
      display: none;
    }

    .mobile-para {
      display: inline-block;
    }
  }

  @media only screen and ${breakpoint.device.largeScreens} {
    .flex-container {
    }

  }
`