import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import quotes from '../images/quotes.png';
import skills from '../images/skills.svg';

const About = () => {
    return (
        <Wrapper className='wrapper'>

            <h5>About Me</h5>
            
            <div className='quotes'>
                <img src={quotes} alt='quotes'className='quotes-img'/>
            </div>

            <div className='about-para'>
                <p>
                Hi <span role="img" aria-label="waving hand">👋🏾</span>! My name is Ruth but I prefer Alanna.
                I'm a developer at Travelopia, where I work to improve 
                the experience of yacht vacationing and the booking of exotic vacations on
                the modern web. 
                </p>

                <p>
                Currently, I’ve been honing my skills learning the backend as I
                navigate through Lambda School's 18-month intensive Fullstack Development 
                program. I've come to realize that the more I learn, the more there is left to know. 
                Outside of work, I spend most of my time reading, <StyledLink href='https://blog.ruthmatieu.com/' target='_blank' rel="noopener noreferrer" className="btn-link">writing</StyledLink> and
                catching up with Game of Thrones. 
                </p>
                <StyledLink className="btn-link" href="./pdfFile.pdf" target="blank">Resumé</StyledLink>
                
                
            </div>
            <img src={skills} alt='skillset' className='skills'/>   
        </Wrapper>
    )
}

export default About;

const Wrapper = styled.section`

    padding: 50px 20px 0 20px;

    h5 {
        font-size: 23px;
        text-transform: uppercase;
        padding-bottom: 40px;
        color: #138085;
        font-weight: 700;
    }

    .quotes {
        position: relative;
    }
    .quotes-img {
        width: 30px;
    }

    .skills {
        width: 100%;
        margin: 30px 0;
        
    }

    p {
        line-height: 25px;
        padding: 0 20px 10px 20px;
    }
    @media only screen and ${breakpoint.device.laptop} {
        background-color: yellow;
    }

    @media only screen and ${breakpoint.device.desktop} {
        background-color: red;
    }
`;

const StyledLink = styled.a`
    color: #DC8666;
    text-decoration: none;
    

`;