import React from 'react';
import styled from 'styled-components';
import breakpoint from '../../breakpoints';
import { projectData } from '../../data';

//
import Footer from '../Footer';

const LaceUp = () => {
    return (
        <div>
            <Wrapper>
            <div className='intro-container'>
                <h1>{projectData.laceUp.title}</h1>

                <p className='intro-paragraph'>
                    Lace Up is a single page React application built for a sports company specializing in sports training sneakers for both men and women. 
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
                    <img src={projectData.laceUp.mainImage} alt='homepage screenshot' className='main-image'/>
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
                <h3>Web Stack</h3>
                <div className='spotlight-flex'>
                    <div>
                        <p>React and Redux were the best choices for building this application. Due to React's component 
                            based structure, we were able to quickly build a feature once and use it multiple times across
                            the app. With Redux's ease of state management, it only made sense to use both stacks together.</p>
                            <img src={projectData.laceUp.snapTwo} alt='project screenshot' className='snap-two-image'/>

                    </div>
                    <div>
                        <div>
                            <img src={projectData.laceUp.snapOne} alt='project screenshot' className='snap-one-image'/>
                            {/* <img src='' alt='project screenshot'/> */}
                        </div>
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
            {/* <div className='more-projects'>
                <div className='more-proj-one'>
                    aht
                </div>
                <div className='more-proj-two'>
                    aht
                </div>
            </div> */}
            </Wrapper>
            <Footer/>
        </div>
        
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
      font-family: 'Anton', sans-serif;
      font-size: 50px;
      text-align: center;
      text-transform: uppercase;
      padding: 40px 0;
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
      -webkit-box-shadow: 5px 5px 18px 5px #B2B2B2; 
      box-shadow: 5px 5px 18px 5px #B2B2B2;
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

    .more-projects {
        padding: 50px 0 90px 0;
    }

    .snap-one-image {
        width: 300px;
    }

    .snap-two-image {
        width: 100%;
    }

   

    @media only screen and ${breakpoint.device.tablet} {
        // background-color: yellow;

        margin: 0 40px;
        .intro-paragraph {
            text-align: center;
        }

        .tech-stack {
            display: flex;
            justify-content: space-around;
        }
        .cta {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        .snap-one-image {
            width: 400px;
        }

        .snap-two-image {
            width: 95%;
        }
    }

    @media only screen and ${breakpoint.device.desktop} {
        // background-color: red;

        margin: 0 50px;

        img {
            width: 900px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        .spotlight-flex {
            display: flex;
        }

        .spotlight-flex img{
            margin: 0 50px;
        }
    }
`;
