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
                    Laced Up is a single page React application built for a sports company specializing in sports training sneakers for both men and women. 
                    I built this project from scratch with React. I utilized Netlify as a server to host Laced Up, because it allows live updates alongside github.
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
                    <p>The purpose of this project was to create an ecommerce app that allowed users to shop their favorite sneakers
                        with the ability to add products to their cart, create or log in to their account and browse through
                        a collection of footwear. In order to crate these features, this project consisted of 3 phases. First, 
                        the structure of the app and determining where state would reside was laid out. Next, our backend was built 
                        (currently being improved on). Lastly, the front end including form authentication and design was put in place.</p>
                </div>
            </div>
            <div className='spotlight-container'>
                <h3>Web Stack</h3>
                <div className='spotlight-flex'>
                    <div>
                        <p>React and Redux were the best choices for building this application. Due to React's component 
                            based structure, I was able to quickly build a feature once and use it multiple times across
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

            {/* <div className='lessons-container'>
                <h3>Problems + Lessons Learned</h3>
                <div>
                    
                    <p>Similar to most projects, I ran into a few bumps along the way, one particularly difficult area was organization and structure of the code. Because of this project's size, I realized how important maintaining an organized structure would be.
                        I worked hard to keep components as reusable as possible and utilized props for many slight variations. I also used styled-components, because the structure of CSS-in-js is much clearer and prevents overrides.</p>
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
            text-align: left;
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
        //background-color: red;
        max-width: 1024px;
        margin: 0 auto;

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
