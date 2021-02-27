import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from '../breakpoints';
import quotes from '../images/quotes.png';
import skills from '../images/skills.svg';
import { AiFillStar } from 'react-icons/ai';
import resume from '../images/resume.PDF';

const About = () => {
    return (
        <Wrapper className='wrapper'>

            <h5>About Me</h5>
            <div className='about-flex-wrapper'>

            
            <div className='about-one'>
                <div className='quotes'>
                    <img src={quotes} alt='quotes'className='quotes-img'/>
                </div>

                <div className='about-para'>
                    <p>
                    Hi <span role="img" aria-label="waving hand">👋🏾</span>! My name is Ruth but I prefer Alanna.
                    I'm a developer at <StyledLink2 to='/travelopia'><span className='link'>Travelopia</span></StyledLink2>, where I work to improve 
                    the experience of yacht vacationing and the booking of exotic vacations on
                    the modern web. 
                    </p>

                    <p>
                    Currently, I’ve been honing my skills learning the backend as I
                    navigate through Lambda School's 18-month intensive Fullstack Development 
                    program. Through my journey, I've come to find that the more I learn, the more there is left to know. 
                    Outside of work however, I spend most of my time reading, <StyledLink href='https://blog.ruthmatieu.com/' target='_blank' rel="noopener noreferrer" className="btn-link"><span className='link'>writing</span></StyledLink> and
                    catching up with Game of Thrones. 
                    </p>
                    <StyledLink className="btn-link resume" href={resume} target="blank"><span className='link'>View Resumé</span></StyledLink>
                    
                    
                </div>
            </div>
            
            <div className='about-two'>
                <img src={skills} alt='skillset' className='skills'/>   
                <div className='skills-container'>
                    <div>
                        <div className='skills-div'>
                            <AiFillStar style={{color: '#DC8666'}} size={20}/><span className='skills-item'>HTML/CSS</span>
                        </div>
                        <div className='skills-div'>
                            <AiFillStar style={{color: '#138085'}} size={20}/><span className='skills-item'>JavaScript</span>
                        </div>
                        <div className='skills-div'>
                            <AiFillStar style={{color: '#CE7672'}} size={20}/><span className='skills-item'>React</span>
                        </div>
                        <div className='skills-div'>
                            <AiFillStar style={{color: '#EEB462'}} size={20}/><span className='skills-item'>SASS + LESS</span>
                        </div>
                        
                    </div>
                    <div>
                        <div className='skills-div'>
                            <AiFillStar style={{color: '#138085'}} size={20}/><span className='skills-item'>Node.js</span>
                        </div>
                        <div className='skills-div'>
                            <AiFillStar style={{color: '#DC8666'}} size={20}/><span className='skills-item'>Drupal</span>
                        </div>
                        <div className='skills-div'>
                            <AiFillStar style={{color: '#EEB462'}} size={20}/><span className='skills-item'>Redux</span>
                        </div>
                        <div className='skills-div'>
                            <AiFillStar style={{color: '#CE7672'}} size={20}/><span className='skills-item'>HubSpot</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </Wrapper>
    )
}

export default About;

const Wrapper = styled.section`

    padding: 100px 20px;

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

    .skills-div {
        padding: 10px;
        text-align: left;
    }

    .skills-item {
        margin-left: 10px;
    }

    .skills-container {
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding: 30px 0 50px 0;
    }

    .link:hover {
        cursor: pointer;
        border-bottom: 4px solid #DC8666;
    }

    p {
        line-height: 25px;
        padding: 0 20px 10px 20px;
    }

    .resume {
        padding-left: 0px;
    }

    @media only screen and ${breakpoint.device.tablet} {
        padding: 100px 40px;
    }
    .resume {
        padding-left: 40px;
    }

    @media only screen and ${breakpoint.device.desktop} {
        max-width: 1290px;
        margin: 0 auto;

        h5 {
            text-align: center;
        }
        .about-flex-wrapper {
            display: flex;
        }

        .about-one {
            width: 50%;
        }

        .about-two {
            width: 50%;
        }
        .skills {
            width: 100%;
        }

        .resume {
            padding-left: 20px;
        }
    }
`;

const StyledLink = styled.a`
    color: #DC8666;
    text-decoration: none;
    

`;

const StyledLink2 = styled(Link)`
    color: #DC8666;
    text-decoration: none;
    

`;