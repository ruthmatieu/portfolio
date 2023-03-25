import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';

const Project = (props) => {  

  return (
    <Wrapper>
      <div className='project-container'>

       
        
        <div className='mobile-desc'>
          <div class="project-image">
            <a href={props.link} target='_blank' rel="noopener noreferrer"><img src={props.image} alt={props.name}/></a>
          </div>
          <div className='mobile-project-details'>
            <a href={props.link}><h2>{props.name}</h2></a>
            
            <p>{props.description}</p>
            
          </div>

          <div className='mobile-cta-container'>
              {/* <StyledLink to={props.cta1} className='cta'>Learn More</StyledLink> */}
              <a href={props.link} target='_blank' rel="noopener noreferrer" className='cta'><FaExternalLinkSquareAlt size={25} className='icons'/></a>
              <a href={props.github} target='_blank' rel="noopener noreferrer" className='cta'><FaGithub size={25} className='icons'/></a>
            </div>
          
        
        </div>

        <div className='desktop-desc'>
          <div>
            <a href={props.link} target='_blank' rel="noopener noreferrer"><img src={props.image} alt={props.name}/></a>
          </div>
          <div className='project-details'>
            <h2>{props.name}</h2>
            
            <p>{props.description}</p>
            
          </div>

          <div className='cta-container'>
              {/* <StyledLink to={props.cta1} className='cta'>Learn More</StyledLink> */}
              <a href={props.link} target='_blank' rel="noopener noreferrer" className='cta'><FaExternalLinkSquareAlt size={25} className='icons'/></a>
              <a href={props.github} target='_blank' rel="noopener noreferrer" className='cta'><FaGithub size={25} className='icons'/></a>
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
  padding: 25px 0;

    .project-container {
      position: relative;
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      padding: 30px 0 10px 0;
      color: #F5F5EC;
    }

    p {
      font-size: 0.875rem;
      line-height: 25px;
      padding-bottom: 0.75rem;
      color: white;
    }

    img {
      width:100%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      border-radius: 10px 10px 0 0;
    }
    
    img:hover {
      opacity: 0.7;
      transition: 0.5s;
    }

    .cta {
      padding: 0 15px;
    }

    .icons {
      color: #ACB5AD;
    }

    .icons:hover {
      color: #808a82;
      transition: 0.5s;
      cursor: pointer;
    }

    .mobile-desc {
      -webkit-box-shadow: 5px 5px 24px -1px #1F2937; 
      box-shadow: 5px 5px 24px -1px #1F2937;
      border-radius: 10px;
    }

    .mobile-project-details {
      background-color: #B1BCBE;
     }

     .mobile-project-details  p {
      padding: 0 30px 30px 30px;
    }

    .mobile-cta-container {
     display: flex;
     justify-content: center;
     border-radius: 0 0 10px 10px;
     background-color: #EBD9D1;
     padding: 20px 30px;
    }

    .mobile-cta-container .icons {
     color: #ACB5AD;
   }

   .mobile-cta-container .icons:hover {
      color: #FFF;
      transition: 0.5s;
      cursor: pointer;
    }

    .desktop-desc {
      display: none;
    }

    @media only screen and ${breakpoint.device.laptop} {

    }

    @media only screen and ${breakpoint.device.desktop} {
      max-width: 1100px;
      margin: 0 auto;
      
      .project-container {
        padding-bottom: 100px;
        position: relative;
      }

       .mobile-desc {
         display: none;
       }

       img {
        border-radius: 10px ;      
      }
       .desktop-desc {
         display: block;
       }

       .project-details {
        background-color: #B1BCBE;
        position: absolute;
        top: 100px;
        right: 270px;
        left: -100px;
        -webkit-box-shadow: 5px 5px 24px -1px #7e898c; 
        box-shadow: 5px 5px 24px -1px #7e898c;
       }

       .project-details  p {
         padding: 0 30px 30px 30px;
       }

       .cta-container {
        background-color: #EBD9D1;
        position: absolute;
        bottom: 130px;
        right: -5%;
        padding: 20px 30px;
        -webkit-box-shadow: 5px 5px 24px -1px #1F2937; 
        box-shadow: 5px 5px 24px -1px #1F2937;
       }

       .icons {
        color: #ACB5AD;
      }
    }

    @media only screen and ${breakpoint.device.largeScreens} {
      
      .project-details {
        top: 100px;
        right: 330px;
        left: -50px;
       }

       .cta-container {
        bottom: 130px;
        padding: 20px 30px;
       }
    }
`;