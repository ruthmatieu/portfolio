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
              image={item.image}
              name={item.name}
              link={item.link}
              description={item.description}
              cta1={item.cta1}
              cta2={item.cta2}
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
    background-color: #CE7672;

    h5 {
      font-size: 23px;
      text-transform: uppercase;
      padding-bottom: 40px;
      color: white;
      font-weight: 700;
    }

   

    @media only screen and ${breakpoint.device.laptop} {
        background-color: yellow;
    }

    @media only screen and ${breakpoint.device.desktop} {
        display: grid;
        place-items: center;

        section {
          
          width: 700px;
        }
       
    }
`;

const StyledLink = styled.a`
    color: #DC8666;
    text-decoration: none;

`;