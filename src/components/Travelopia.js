import React from 'react';

//comps
import Nav from './Nav';
import Footer from './Footer';

//images
import imageOne from '../images/travelopia-one.png';
import imageTwo from '../images/travelopia-two.jpg';
import imageThree from '../images/travelopia-three.jpg';
import imageFour from '../images/travelopia-four.png';
import techStack from '../images/trav-tech-stack.svg'

//1yr • 1 year ago Had a great day working on digital marketing at the Grow boating Marketing Summit #boating #salesandmarketing #mymoorings The Moorings Yacht Charters
function Travelopia() {

  const lightblue = '#89BEAF';
  
  return (
      
    <div>
      <Nav/>
      <div style={{padding: '50px 250px 0 250px', textAlign: 'left'}}>
        <h2 style={{color: lightblue, fontWeight: '900', fontSize: '2.5rem', padding: '30px 0 50px 0'}}>Working at Travelopia</h2>
        
        <p>
        I currently work as a Jr. Web Developer (Online Specialist) at <a className="btn-link" href='https://www.travelopia.com/' target='_blank' rel="noopener noreferrer">Travelopia</a>, a travel/leisure 
        company located in Clearwater, FL. Since I first began in August 2019, this role has proven to be an amazing experience 
        where I was able to work alongside senior Developers and experienced Designers to build multiple powerful client facing products.
        Throughout my duration at Travelopia, I have been pushed and challenged in every aspect of my skills and 
        </p>
        
      </div>

      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '50px'}}>
        <img src={imageOne} alt='' style={{ minWidth: '200px', maxWidth: '900px'}}/>
      </div>

      <div style={{textAlign: 'left', paddingLeft: '250px'}}>
                <h3 style={{fontSize: '2rem', padding: '120px 0 50px 0'}}>Personal Goals</h3>
                <div style={{padding: '0 250px 80px 0', display: 'flex'}}>
                  <div>
                    <p style={{paddingBottom: '20px'}}>
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
                  <div style={{paddingLeft: '40px'}}>
                    <img src={techStack} alt=''/>
                  </div>
                </div>
                
            </div>

            <div style={{textAlign: 'right', paddingRight: '250px'}}>
                <h3 style={{fontSize: '2rem', padding: '120px 0 50px 0'}}>Challenges + Growth</h3>
                <img style={{maxWidth: '900px'}} src={imageFour} alt='image-ayye'/>
                <div style={{padding: '0 0 80px 250px'}}>
                  <p>
                    Just as luck would have it, my first week consisted of me launching a new base (web page) for The Bahamas 
                    from scratch using Drupal for the first time. This was a learning curve that I have grown to embrace.</p>
                  <p>With such a huge and diverse team, learning vurve</p>
                  <p>Like most companies, and being a travel/vacationing company at that, many employees were laid 
                    off. Quickly, the existing employees soon found themselves doing tasks out of their role description 
                    including myself. With this change, I made it a goal to dive deeper into data analyst (our Data Analyst 
                    was laid off and her work handed over).
                  </p>
                </div>
                
            </div>
      <Footer/>
    </div>
    
  );
}

export default Travelopia;