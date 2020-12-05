import React from 'react';
import quotes from '../images/quotes.png';

function About() {
  const lightblue = '#82B4C3'
  
  return (
    <div style={{padding: '0 0 80px 0'}}>
      <h5 style={{textAlign: 'left', color: lightblue, fontWeight: '900', fontSize: '2rem', padding: '30px 0'}}>About Me</h5>
      <div style={{position: 'absolute', top: '150'}}>
        <img style={{width: '70px'}} src={quotes} alt='quotes'/>
      </div>
      <div style={{textAlign: 'left', padding: '60px 40px 0 40px'}}>
        <p style={{padding: '5px 0'}}>
          Hi there! I’m Alanna. I’m a passionate introvert who loves building things with code.
        </p>
        <p style={{padding: '5px 0'}}>
          My first experience with programming was when I was 12, but I didn’t last
          long: I was a big fan of computer-animated TV shows like Reboot, and I
          decided I wanted to do “computer graphics”. My mom bought me a C++
          Reference Manual. It was several hundred pages, and totally inscrutable to me.
        </p>
        <p style={{padding: '5px 0'}}>
          Years later, I decided to try learning Python. It was a radically different
          experience. I distinctly remember the moment it clicked; I was watching The
          Price is Right, and they were spinning the big wheel. A contestant landed on
          0.70, and it made me wonder: statistically, what was their best move?
        </p>
        <p style={{padding: '5px 0'}}>
          Since then, I’ve been honing my skills and learning Javascript. I recently
          graduated from Apex College’s 12-week intensive Web Development Bootcamp
          program. I’m seeking a full-time role where I can help a company achieve their
          goals.
        </p>
        
      </div>
      
    </div>
    
  );
}

export default About;