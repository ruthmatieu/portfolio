import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

//components
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Homepage = () => {  

    const string = 'I build stuff.'

  return (
      <div>

      
        <Wrapper>
            <div className='intro'>
                <div>
                    <h1>Alanna Mathieu</h1>
                    <h2>{string}</h2>
                    <p>
                        Frontend Developer at <StyledLink to='/travelopia'>Travelopia</StyledLink> and Fullstack student at <StyledLink to='/lambda'>Lambda School</StyledLink>.
                    </p>
                    <a href='mailto:matieu.ruth@gmail.com' target='_blank'><button>Get In Touch</button></a>
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
    </div>
    
  );
}

export default Homepage;

const Wrapper = styled.section`

    position: relative;
    background-color: #138085;
    height: 80vh;
    display: grid;
    place-items: center;

    .intro {
        margin: 0 20px;
    }
    
    h1 {
        font-size: 45px;
        padding-bottom: 10px;
        color: white;
    }

    h2 {
        padding-bottom: 30px;
        font-size: 30px;
        color: #DC8666;
    }

    p {
        line-height: 25px;
        color: white;
    }

    h1, h2, p {
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
        color: #DC8666;
    }

    .socials a:hover {

    }

    button {
        text-align: center;
        margin-top: 30px;
        padding: 10px 15px;
        background-color: #138085;
        border: 1px solid white;
        border-radius: 25px;
        color: white;
    }

    button:hover {
        cursor: pointer;
    }


    @media only screen and ${breakpoint.device.tablet} {
        background-color: yellow;
    }

    @media only screen and ${breakpoint.device.desktop} {
        background-color: red;
    }
`;
const StyledLink = styled(Link)`
    color: #EEB462;
    text-decoration: none;

`;
