import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import { Link } from 'react-router-dom';
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';

const Project = (props) => {  

  return (
    <Wrapper>
      <div className='project-container'>

       
        
        <div className='mobile-desc'>
          <div>
            <Link to={props.cta1}><img src={props.image} alt={props.name}/></Link>
          </div>
          <h2>{props.name}</h2>
          
          <p>{props.description}</p>
          
          <div className='cta-container'>
            <StyledLink to={props.cta1} className='cta'>Learn More</StyledLink>
            <a href={props.cta2} target='_blank' className='cta'><FaExternalLinkSquareAlt className='icons'/></a>
            <a href={props.link} target='_blank' className='cta'><FaGithub className='icons'/></a>
          </div>
        </div>

        <div className='desktop-desc'>
          <div>
            <Link to={props.cta1}><img src={props.image} alt={props.name}/></Link>
          </div>
          <div className='project-details'>
            <h2>{props.name}</h2>
            
            <p>{props.description}</p>
            
          </div>
          <div className='cta-container'>
              <StyledLink to={props.cta1} className='cta'>Learn More</StyledLink>
              <a href={props.cta2} target='_blank' className='cta'><FaExternalLinkSquareAlt className='icons'/></a>
              <a href={props.link} target='_blank' className='cta'><FaGithub className='icons'/></a>
            </div>
          
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
      position: relative;
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
    
    .desktop-desc {

      display: none;
    }
    @media only screen and ${breakpoint.device.laptop} {
        background-color: yellow;
    }

    @media only screen and ${breakpoint.device.desktop} {
       .mobile-desc {
         display: none;
       }

       .desktop-desc {
         display: block;
       }

       .project-details {
        background-color: #DC8666;
        position: absolute;
        top: 100px;
        right: 270px;
        left: -100px;
        -webkit-box-shadow: 5px 5px 24px -1px #633C2E; 
        box-shadow: 5px 5px 24px -1px #633C2E;
       }

       .cta-container {
        background-color: #544667;
        position: absolute;
        bottom: 130px;
        right: -50px;
        padding: 20px 0;
        -webkit-box-shadow: 5px 5px 24px -1px #544667; 
        box-shadow: 5px 5px 24px -1px #544667;
       }

       .icons {
        color: #EEB462;
      }
    }

    @media only screen and ${breakpoint.device.largeScreens} {
      
      .project-details {
        top: 100px;
        right: 360px;
        left: -200px;
       }

       .cta-container {
        bottom: 130px;
        right: -150px;
        padding: 20px 0;
       }
    }
`;

const StyledLink = styled(Link)`
    color: #544667;
    text-decoration: none;

    @media only screen and ${breakpoint.device.desktop} {
      color: #EEB462;
     }

`;