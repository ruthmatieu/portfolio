import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

//components
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import background from '../images/background-landing.png';
import headshot from '../images/headshot.png';
import bgRect from '../images/bg-rectangle.svg';
import resume from '../images/resume.PDF';

const Homepage = () => {  

    const string = 'Code for the modern web'

  return (
      <WrapperDiv>

      
        <Wrapper>
            <div className='width-container'>
                <h1>RUTH MATIEU</h1>
                <h2>Fullstack Developer</h2>
                
                
                
                

                {/* <div className='hero-intro'>
                    <div className='left-intro'>
                        <img src={bgRect} className='object-one' alt=''/>
                        <img src={headshot} alt='Ruth Matieu headshot' className='headshot'/>
                        
                    </div>
                    <div className='left-intro-desktop'>
                        <img src={bgRect} className='object-one' alt=''/>
                        <img src={headshot} alt='Ruth Matieu headshot' className='headshot'/>
                        
                    </div>
                    <div className='right-intro'>
                        <div>
                            <h1>Alanna Mathieu</h1>
                            <h2>{string}</h2>
                            <p>
                                Frontend Developer at <StyledLink to='/travelopia'>Travelopia</StyledLink>, <br/> Fullstack student at Lambda School.
                            </p>
                            <div className='btn-div'>
                                <div className='mail-btn'>
                                    <a href='mailto:matieu.ruth@gmail.com' target='_blank' rel="noopener noreferrer"><button>Contact Me</button></a>
                                </div>
                                <div className='resume-btn'>
                                    <a href={resume} target='_blank' rel="noopener noreferrer"><button>Resume</button></a>
                                </div>
                            </div>
                            
                        </div>
                    </div> 
                    
                </div>*/}
            

            <div className="socials">
                <a href="https://www.linkedin.com/in/ruthmatieu/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/alanna.code/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100008826826867" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://github.com/ruthmatieu" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://twitter.com/ruthmatieu" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
        </div>
        
        </Wrapper>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </WrapperDiv>
    
  );
}

export default Homepage;

const WrapperDiv = styled.div`

@media only screen and ${breakpoint.device.desktop} {
    //background-color: red;

    
    
    }

`

const Wrapper = styled.section`

    height: 90vh;
    position: relative;
    //background-color: #FFF8F5;
    // background-image: url(${background});
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    display: grid; 
    place-items: center;
    

    .width-container {
        
    }

    h1 {
        font-size: 7rem;
        font-family: 'Anton', sans-serif;
        letter-spacing: 15px;
        padding: 10px 0;
        color: #DC8666;
        text-align: center;
        text-shadow: 10px 8px 8px #edbcab;
        animation: fade-in 0.01s linear 1.5s forwards;
    }

    h2 {
        font-size: 2rem;
        font-family: 'Anton', sans-serif;
        letter-spacing: 5px;
        padding: 10px 0;
        color: #EEB462;
        text-align: center;
    }

    .socials  {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 20px;
        
    }

    .socials a {
        margin-bottom: 15px;
        transition: 0.5s;
        color: #EEB462;    
    }

    .socials a:hover {
        color: white;
        transition: 0.5s;
    }

    .mail-btn button {
        transition: 0.5s;
        background-color: #544667;
        margin: 30px 5px 0 5px;
        padding: 15px 15px;
        border: none;
        border-radius: 25px;
        color: white;
    }

    .mail-btn button:hover {
        transition: 0.5s;
        cursor: pointer;
        background-color: rgba(84, 70, 103, 0.8);
    }

    .resume-btn button {
        transition: 0.5s;
        background-color: #138085;
        margin: 30px 5px 0 5px;
        padding: 15px 25px;
        border: none;
        border-radius: 25px;
        color: white;
    }

    .resume-btn button:hover {
        transition: 0.5s;
        cursor: pointer;
        background-color: rgba(84, 70, 103, 0.8);
    }

    


    @media only screen and ${breakpoint.device.tablet} {
        //background-color: yellow;
        .socials {
            top: 60px;
            right: 40px; 
        }

        
    }

    @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;

        height: 700px;
        width: 100%;

        .width-container {
            max-width: 1290px;
            margin: 0 auto;
        }

        .socials {
            top: 60px;
            right: 50px; 
        }
    }
`;

const StyledLink = styled(Link)`
    color: #EEB462;
    text-decoration: none;   

`;
