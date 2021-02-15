import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

//components
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import headshot from '../images/headshot.svg';

const Homepage = () => {  

    const string = 'Clean code. Clean designs.'

  return (
      <WrapperDiv>

      
        <Wrapper>
            <div className='intro'>
                <div className='intro-wrapper'>
                    <div className='left-side'>
                        <img className='headshot' src={headshot} alt='Ruth Matieu headshot'/>
                    </div>
                    <div className='right-side'>
                        <h1>Alanna Mathieu</h1>
                        <h2>{string}</h2>
                        <p>
                            Frontend Developer at <StyledLink to='/travelopia'>Travelopia</StyledLink> and Fullstack student at Lambda School.
                        </p>
                        <div className='btn-div'>
                            <a href='mailto:matieu.ruth@gmail.com' target='_blank' rel="noopener noreferrer"><button>CONTACT ME</button></a>
                        </div>
                    </div>
                </div>
            </div>
        

        <div className="socials">
            <a href="https://www.linkedin.com/in/ruthmatieu/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/alanna.code/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100008826826867" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://github.com/ruthmatieu" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://twitter.com/ruthmatieu" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
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

    position: relative;
    // background: rgb(19,128,133);
    // background: linear-gradient(180deg, rgba(19,128,133,1) 0%, rgba(255,255,255,1) 100%);
    background-color: rgb(19, 128, 134);
    height: 80vh;
    display: grid;
    place-items: center;

    .intro {
        margin: 0 20px;
    }

    .headshot {
        width: 275px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    
    h1 {
        font-size: 45px;
        font-family: 'Anton', sans-serif;
        letter-spacing: 5px;
        padding: 10px 0;
        color: #CE7672;
        text-align: center;
    }

    h2 {
        font-family: 'Padauk', sans-serif;
        padding-bottom: 30px;
        font-size: 30px;
        color: #EEB462;
        text-align: center;
    }

    p {
        
        line-height: 25px;
        color: #DC8666;
        text-align: left;
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
        color: #EEB462;
    }

    .socials a:hover {

    }

    .btn-div {
        text-align: center;
    }

    button {
        margin-top: 30px;
        padding: 15px 15px;
        background-color: #544667;
        border: none;
        border-radius: 25px;
        color: white;
        
    }

    button:hover {
        cursor: pointer;
        background-color: rgba(84, 70, 103, 0.64);
    }


    @media only screen and ${breakpoint.device.tablet} {
        // background-color: yellow;
        .socials {
            top: 60px;
            right: 40px; 
        }
    }

    @media only screen and ${breakpoint.device.desktop} {
        // background-color: white;
        
        
        .intro {
            margin: 0;
        }

        .intro-wrapper {
            display: flex;
            width: 100%;
        }

        .right-side {
            padding: 0 120px;
            width: 50%;
        }

        .left-side {
            width: 50%;
            height: 100%;
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
