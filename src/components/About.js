import React from 'react';
import quotes from '../images/quotes.png';

function About() {
  
  return (
    <div className='wrapper'>
      <h5>About Me</h5>
      <div className='quotes'>
        <img src={quotes} alt='quotes'/>
      </div>
      <div className='about-para'>
        <p>
          Hi <span role="img" aria-label="waving hand">👋🏾</span>! My name is Ruth but I prefer Alanna.
          I'm a developer at Travelopia, where I work to improve 
          the experience of yacht vacationing and the booking of exotic vacations on
          the modern web. 
        </p>
        
        <p>
          On my web dev journey, I have come to realize that the more I learn, 
          the more there is left to learn. Working alongside senior developers have 
          raised expectations of not only myself but the work I put 
          out for the world to see.
        </p>

        <p>
          Currently, I’ve been honing my skills learning the backend as I
          navigate through Lambda School's 18-month intensive Fullstack Development 
          program. Outside of work, I spend most of my time reading, <a href='https://blog.ruthmatieu.com/' target='_blank' rel="noopener noreferrer" className="btn-link">writing</a> to 
          share what I've learned, and coding in order to solidify 
          my understanding of new concepts. 
        </p>
        <a className="btn-link" href="./pdfFile.pdf" target="blank">Resumé</a>
        
      </div>
      
      
    </div>
    
  );
}

export default About;