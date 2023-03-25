import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import Project from './Project';
import { data } from '../data';

const Projects = () => {  

  return (
    <Wrapper>
      <section id="latest-projects">
        <p className='pt-10 pb-4 text-sm font-mediu leading-8'>Note: For confidentiality reasons, I am unable to share some of the projects I have worked on in the past. However, I am happy to provide a few examples of projects that are either available for public viewing or are my personal projects.</p>
        {data.map(item => {
          return (
            <Project
              key={item.id}
              name={item.name}
              image={item.image}
              cta1={item.cta1}
              github={item.github}
              link={item.link}
              description={item.description}
            />
          )
        })}
      </section>
    </Wrapper>
  );
}

export default Projects;

const Wrapper = styled.section`

    max-width: 1280px;
    margin: 0 auto;
    padding: 5rem 2rem;
    background-color: #ACB5AE;

    h5 {
      font-size: 23px;
      text-transform: uppercase;
      padding-bottom: 40px;
      color: white;
      font-weight: 700;
    }
   
    @media only screen and ${breakpoint.device.mobile} {
      padding: 5rem 4rem;
    }

    @media only screen and ${breakpoint.device.tablet} {
      padding: 5rem 8rem;
    }

    @media only screen and ${breakpoint.device.desktop} {
        display: grid;
        place-items: center;

        section {
          
          width: 700px;
        }
    }
`;