import React from "react";
import styled from 'styled-components';
import breakpoint from '../breakpoints';


const skills_one = [
  {
    title: 'JavaScript ES6+'
  },
  {
    title: 'Python'
  },
  {
    title: 'React'
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
    title: 'GIT'
  },
  {
    title: 'Python'
  },
  {
    title: 'Figma'
  }
]
const About = () => {
    return (
      <Container>
        <div className="wrapper">
          <div className="flex-container">
            <div className="info">
              <p>I'm a Frontend Developer at <a href="https://webstaurantstore.com/" target="_blank" rel="noreferrer" style={{color: '#C9726C'}}>WebstaurantStore</a>, where I work to improve the 
                experience of shopping for major restuarant supplies and products online.
                Currently, I’ve been expanding my skills as I explore backend technology stacks such as Node, Cypress and PosgreSQL.
                Through my coding journey, I've come to find that the more I know, the more there is left to know. Therefore, I pride
                myself on life-long learning. When not adulting, however, I spend most of my time reading, writing, and catching 
                up with Game of Thrones.</p>
            </div>
            <div>
              <h3>Tech Stack</h3>
              <div className="skills">
                <div>
                  {skills_one.map((skill, i) => (
                    <div key={i}>
                      <p>{skill.title}</p>
                    </div>
                  ))}
                </div>
                <div className="skills_two">
                  {skills_two.map((skill, i) => (
                    <div key={i}>
                      <p>{skill.title}</p>
                    </div>
                  ))}
                </div>
                <div className="skills_two">
                  {skills_three.map((skill, i) => (
                    <div key={i}>
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

const Container = styled.section`
  //background: white;

  .wrapper {
    max-width: 1680px;
    overflow: hidden;
    margin: 0 auto;
    padding: 0;
    height: 60rem;
    background: #FAFAFA;
    display: grid;
    place-items: center;
  }

  .flex-container {
    width: 80%;
    padding: 4rem 0;
  }

  .info, .skills {
    color: #737373;
    font-size: 14px;
    line-height: 2rem;
    letter-spacing: 0.045rem;
  }

  h3 {
    color: #544667;
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
    //background: red;

    .wrapper {
      height: 50rem;
      //background: red;
    }
  }

  @media only screen and ${breakpoint.device.tablet} {
    //background: white;

    .wrapper {
      height: 45rem;
      //background: white;
    }

    .flex-container {
      width: 85%;
    }

    .info p, .skills {
      font-size: 1rem;
    }
  }

  @media only screen and ${breakpoint.device.desktop} {
    //background: blue;

    .wrapper {
      height: 35rem;
      //background: blue;
    }

    .flex-container {
      display: flex;
      width: 85%;
    }

    .info {
      padding-right: 15%;
    }

    h3 {
      padding: 0 0 2rem 0;
    }
  }

  @media only screen and ${breakpoint.device.largeScreens} {
    .flex-container {
      width: 75%;
    }

  }
`