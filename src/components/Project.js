import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import { Link } from 'react-router-dom';
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';

const Project = (props) => {  

  return (
    <Wrapper>
      <div className='project-container'>

        <div>
          <Link to={props.cta1}><img src={props.image} alt={props.name}/></Link>
        </div>
        <h2>{props.name}</h2>
        
        <p>{props.description}</p>
        
        <div className='cta-container'>
          <StyledLink to={props.cta1} className='cta'>Read More</StyledLink>
          <a href={props.cta2} target='_blank' className='cta'><FaExternalLinkSquareAlt className='icons'/></a>
          <a href={props.link} target='_blank' className='cta'><FaGithub className='icons'/></a>
        </div>
      </div>
      
    </Wrapper>
  );
}

export default Project;

const Wrapper = styled.section`

  display: grid;
  place-items: center;
  text-align: center;

    .project-container {
      padding-bottom: 80px;
      
    }

    h2 {
      font-size: 20px;
      font-weight: 600;
      padding: 30px 0 10px 0;
      color: #544667;
    }

    p {
      line-height: 25px;
      padding-bottom: 10px;
      color: white;
    }

    img {
      width: 100%;
      border-radius: 10px;
    }
    .cta {
      padding: 0 15px;
    }

    .icons {
      color: #544667;
    }

    @media only screen and ${breakpoint.device.laptop} {
        background-color: yellow;
    }

    @media only screen and ${breakpoint.device.desktop} {
        background-color: red;
    }
`;

const StyledLink = styled(Link)`
    color: #544667;
    text-decoration: none;

`;