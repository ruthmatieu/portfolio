import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import Project from './Project';
import { data } from '../data';

const Projects = () => {  

  return (
    <Wrapper>
      <h5>Work</h5>
      <section>
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

    padding: 50px 20px 0 20px;
    background-color: rgba(206, 120, 115, 0.96);

    h5 {
      font-size: 23px;
      text-transform: uppercase;
      padding-bottom: 40px;
      color: white;
      font-weight: 700;
    }

   

    @media only screen and ${breakpoint.device.tablet} {

        padding: 50px 40px 0 40px;
    }

    @media only screen and ${breakpoint.device.desktop} {
        display: grid;
        place-items: center;

        section {
          
          width: 700px;
        }
       
    }
`;
