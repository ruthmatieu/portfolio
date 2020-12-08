import React from 'react';
import styled from 'styled-components';
import quotes from '../images/quotes.png';

function About() {
  const lightblue = '#89BEAF';

  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
  
  return (
    <div style={{padding: '0 0 100px 0'}}>
      <h5 style={{textAlign: 'left', color: lightblue, fontWeight: '900', fontSize: '2.5rem', padding: '30px 0 90px 0'}}>About Me</h5>
      <div style={{position: 'absolute', top: '150'}}>
        <img style={{width: '70px'}} src={quotes} alt='quotes'/>
      </div>
      <div style={{textAlign: 'left', padding: '60px 40px 0 40px'}}>
        <p style={{paddingBottom: '30px'}}>
          Hi there! My name is Ruth but I prefer Alanna. I’m a passionate introvert who 
          loves immersing in the world of code.
        </p>
        <p style={{paddingBottom: '30px'}}>
          I currently work as a frontend developer at Travelopia, where I work to improve 
          the experience of building and deploying to the modern web. Outside of work, I spend a lot 
          of time reading to increase my knowledge with valuable lessons from experienced
          programmers, <a href='https://blog.ruthmatieu.com/' target='_blank' className="btn-link">writing</a> to 
          share what I've learned, and coding in order to solidify 
          my understanding of new concepts. 
        </p>
        <p style={{paddingBottom: '30px'}}>
          On my web development journey, I have come to realize that the more I learn, 
          the more there is left to learn. Working alongside senior developers have in 
          encouraged me to raise my expectations of not only myself but the work I put 
          out for the world to see.
        </p>
        <p style={{paddingBottom: '30px'}}>
          Currently, I’ve been honing my skills and learning the backend. I am currently 
          going through Lambda School's 18-month intensive Fullstack Development 
          program. I’m seeking a full-time role where I can play a part in helping 
          others achieve their goals.
        </p>
        <a className="btn-link" href="./pdfFile.pdf" target="blank">Resumé</a>
        
      </div>
      
      
    </div>
    
  );
}

export default About;