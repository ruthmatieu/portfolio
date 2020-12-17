import React from 'react';

//comps
import Nav from './Nav';
import Footer from './Footer';

//images
import imageOne from '../images/travelopia-one.png';
import imageFour from '../images/travelopia-four.png';
import techStack from '../images/trav-tech-stack.svg'
import techStackCol from '../images/trav-tech-stack-col.svg';


function Lambda() {
  
  return (
      
    <div>
      <Nav/>
      <div className='travelopia-wrapper'>
        <div className='trav-intro'>
          <h2>Studying at Lambda</h2>
          
          <p>
          I currently work as a Jr. Web Developer (Online Specialist) at <a className="btn-link" href='https://www.travelopia.com/' target='_blank' rel="noopener noreferrer">Travelopia</a>, a travel/leisure 
          company located in Clearwater, FL. Since I first began in August 2019, this role has proven to be an amazing experience 
          where I was able to work alongside senior Developers and experienced Designers to build multiple powerful client facing products.
          Throughout my duration at Travelopia, I have been pushed and challenged in every aspect of my skills and 
          </p>
          
        </div>

        <div className='image-wrapper'>
          <img src={imageOne} alt=''/>
        </div>

        <div className='personal-goals-wrapper'>
          <h3>Personal Goals</h3>
          <div className='personal-goals'>
            <div className='p-g-div'>
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
                        always an option, come March 2020, it became the new normal. My goal was to adapt to the new work 
                        environment and ensure I was being just as effective as I was in the office.
              </p>
            </div>
            <div className='tech-stack-col'>
              <img src={techStack} alt='Travelopia tech stack'/>
              
            </div>
            <div className='tech-stack-row'>
              <img src={techStackCol} alt='Travelopia tech stack'/>
            </div>
                    
          </div>
                  
        </div>

        <div style={{textAlign: 'left'}}>
                  
                  <img className='second-image' style={{maxWidth: '900px', padding: '0 0 50px 0'}} src={imageFour} alt='IBEX Summit 2019'/>
                  <h3 style={{fontSize: '2rem', padding: '0 0 50px 0', textAlign: 'right', color: 'black'}}>Challenges + Growth</h3>
                  <div style={{padding: '0 0 80px 0', textAlign: 'left'}}>
                    <p>
                      Just as luck would have it, my first week consisted of me launching a new base (web page) for The Bahamas 
                      from scratch using Drupal for the first time. Needless to say I had no idea what I was doing but with the 
                      help of some of my talented seniors, I was able to survive the learning curve.</p>
                    <p>
                      With such a huge and diverse team, effective communication is a necessity. This was my second-biggest
                      area of growth. I realized how easy it was for misunderstndings to take place among my colleagues when 
                      messages weren't clear with multple people in different countries and backgrounds being involved. For 
                      this reason, I made it a habit to always use a nice, professional tone (sarcasm cannot be detected through 
                      text) and be as detailed as possible to leave as little room as possible for confusion.
                    </p>
                    <p>Like most companies, and being a travel/vacationing company at that, many employees were laid 
                      off. Quickly, the existing employees soon found themselves doing tasks out of their role description 
                      including myself. With this change, I made it a goal to dive deeper into data analyst (our Data Analyst 
                      was laid off and her work handed over).
                    </p>
                  </div>
                  
              </div>
        <Footer/>
      </div>
    </div>
    
  );
}

export default Lambda;