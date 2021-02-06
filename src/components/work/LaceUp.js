import React from 'react';
import styled from 'styled-components';
import breakpoint from '../../breakpoints';
import { projectData } from '../../data';

const LaceUp = () => {
    return (
        <Wrapper>
            <div className='intro-container'>
                <h1>{projectData.laceUp.title}</h1>

                <p className='intro-paragraph'>
                    Lace Up is a Single Page React Application built for a sports company specializing in shoes for sports training. 
                    Lace Up is built from the ground up.
                </p>
                
                <div className='tech-stack'>
                    <div>
                        <p><span>Tech Stack:</span><br/>{projectData.laceUp.tech}</p>
                    </div>
                    <div className='cta'>
                        <a href={projectData.laceUp.live} target='_blank' rel="noopener noreferrer">Live Demo</a>
                        <a href={projectData.laceUp.git} target='_blank' rel="noopener noreferrer">Source Code</a>
                    </div>
                </div>

                <div>
                    <img src={projectData.laceUp.mainImage} alt='homepage screenshot'/>
                </div>
                
            </div>
            
            
            <div className='purpose-container'>
                <h3>Purpose + Goal</h3>
                <div>
                    <p>This project included 3 phases. There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration in some form, by injected humour, or randomised words 
                        which don't look even slightly believable. If you are going to use a passage of 
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the 
                        middle of text. The goal was to incorporate Redux into what we see everyday.</p>
                </div>
            </div>

            <div className='spotlight-container'>
                <h3>Spotlight</h3>
                <div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration in some form, by injected humour, or randomised words 
                        which don't look even slightly believable. If you are going to use a passage of 
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the 
                        middle of text. All the Lorem Ipsum generators on the Internet tend to repeat 
                        predefined chunks as necessary, making this the first true generator on the 
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful 
                        of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                        The generated Lorem Ipsum is therefore always free from repetition, injected 
                        humour, or non-characteristic words etc.</p>
                </div>
                <div>
                    <img src={projectData.laceUp.snapOne} alt='project screenshot'/>
                    <div>
                        <img src='' alt='project screenshot'/>
                        <img src='' alt='project screenshot'/>
                    </div>
                </div>
                
            </div>

            <div className='lessons-container'>
                <h3>Problems + Lessons Learned</h3>
                <div>
                    
                    <p>This project included 3 phases. There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration in some form, by injected humour, or randomised words 
                        which don't look even slightly believable. If you are going to use a passage of 
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the 
                        middle of text.</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default LaceUp;

const Wrapper = styled.section`

  display: grid;
  place-items: center;
  margin: 0 20px;
    .intro-container, .purpose-container, .spotlight-container, .lessons-container {
        padding-bottom: 50px;
    }

    h1 {
      padding: 40px 0;
      text-align: center;
      font-size: 30px;
      color: #CE7672;
    }

    p {
        line-height: 25px;
        padding-bottom: 10px;
    }

    .tech-stack {
        padding: 20px 0;
    }

    .tech-stack span {
        color: #DC8666;
        font-weight: 600;
    }

    .cta a {
        text-decoration: none;
        color: #EEB462;
        font-weight: 500;
        padding-right: 20px;
    }

    img {
      width: 100%;
    }

    .purpose-container h3 {
        font-size: 25px;
        padding-bottom: 20px;
        text-align: right;
        color: #138085;

    }

    .spotlight-container h3 {
        font-size: 25px;
        padding-bottom: 20px;
        color: #138085;

    }

    .lessons-container h3 {
        font-size: 25px;
        padding-bottom: 20px;
        text-align: right;
        color: #138085;
    }

   

    @media only screen and ${breakpoint.device.laptop} {
        background-color: yellow;
    }

    @media only screen and ${breakpoint.device.desktop} {
        background-color: red;
    }
`;
