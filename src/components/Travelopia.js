import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
//images
import main from '../images/travelopia-one.jpg';
import techStack from '../images/trav-tech-stack.svg';
import techStackCol from '../images/trav-tech-stack-col.svg';
import trav from '../images/travelopia-four.png';


//
import Footer from './Footer';

const LaceUp = () => {
    return (
        <div>
            <Wrapper>
            <div className='intro-container'>
                <h1>Working at Travelopia</h1>

                <p className='intro-paragraph'>
                I currently work as a Jr. Web Developer (Online Specialist) specializing in Drupal CMS at <a className="btn-link" href='https://www.travelopia.com/' target='_blank' rel="noopener noreferrer">Travelopia</a>, a travel/leisure 
          company located in Clearwater, FL. Since I first began in August 2019, this role has proven to be an amazing experience 
          where I have been able to work alongside senior Developers and experienced Designers to build multiple powerful client facing products.
          Throughout my duration at Travelopia, I have been pushed and challenged to be a much better developer than when I first began.
                </p>

                <div>
                    <img src={main} alt='homepage screenshot' className='main-image'/>
                </div>
                
            </div>
            
            
            <div className='purpose-container'>
                <h3>Personal Goals</h3>
                <div>
                  <p>
                          Prior to working at Travelopia, I had set a few goals for myself. 
                          One being that I would learn as much as I could about the tech stack the company used, 
                          more specifically, Drupal, as I was expected to use the CMS daily.
                  </p>

                  <p>Another goal was to learn to be a productive member of my team. Travelopia is a UK-based company with
                            multiple locations globally that which resulted in working with people not only from the US and UK but also Australia, 
                            Germany, France, South Africa and the Netherlands. 
                          
                  </p>

                  <p>My third goal was birthed during the covid-19 pandemic in early 2020. While working from home was
                            always an option, come March 2020, it became the new normal. My goal was not only to adapt to the new work 
                            environment but to also ensure I was being just as effective as I was in the office.
                  </p>
                </div>
            </div>
            <div>
              
              <div className='tech-stack-row'>
                <img src={techStackCol} alt='Travelopia tech stack'/>
              </div>
            </div>

            <div className='spotlight-container'>
                <h3>Challenges + Growth</h3>
                <div style={{padding: '0 0 80px 0', textAlign: 'left'}} className='random'>
                  <div className='tech-stack-col'>
                    <img src={techStack} alt='Travelopia tech stack'/>
                  </div>
                  <div>

                  
                    <p>
                      Just as luck would have it, my first week consisted of me launching a new base (web page) for The Bahamas 
                      from scratch using Drupal for the first time. Needless to say I needed guidance and with the 
                      help of my talented seniors, I was able to survive this learning curve.</p>
                    <p>
                      With such a huge and diverse team, effective communication is a necessity. This was my second-biggest
                      area of growth. I realized how easy it was for misunderstndings to take place among my colleagues when 
                      messages weren't clear with multple people in different countries and backgrounds being involved. For 
                      this reason, I made it a habit to always use a nice, professional tone (sarcasm cannot be detected through 
                      text) and be as detailed as possible to leave as little room as possible for confusion.
                    </p>
                    <p>Similar to many companies affected by covid-19, many employees were laid 
                      off. Quickly, I found myself wearing multiple hats as we lunged into an all-hands-on-deck approach.
                    </p>
                    </div>
                  </div>
                  <img src={trav} alt='Boat Summit' className='boat-summit-collage'/>
            </div>
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
    .intro-paragraph {
      text-align: left;
      padding-bottom: 80px;
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
    .tech-stack-row {
      padding-bottom: 50px;
    }
    .tech-stack-col {
      display: none;
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

    .more-projects {
        padding: 50px 0 90px 0;
    }
    
    .boat-summit-collage {
      width: 100%;
    }
   

    @media only screen and ${breakpoint.device.tablet} {
        // background-color: yellow;

        margin: 0 40px;
        .intro-paragraph {
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
            width: 300px;
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
        .random {
          display: flex;
        }

        .tech-stack-col {
          display: block;
        }
        .tech-stack-col img{
          width: 150px;
          margin-right: 50px;
        }

        .tech-stack-row {
          display: none;
        }
    }
`;