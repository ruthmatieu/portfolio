import React from 'react';
import skills from '../images/skills.svg'

function Skills() {

  const lightblue = '#82B4C3';
  
  return (
    <div>
      <div style={{textAlign: 'left'}}>
        <h2 style={{color: lightblue, fontWeight: '900', fontSize: '2.5rem', padding: '30px 0 90px 0'}}>My Skills</h2>
        <div style={{display: 'grid', placeItems: 'center', paddingBottom: '20px'}}>
          <img style={{width: '800px'}} src={skills} alt='skills'/>
        </div>
        
        <p>
          Through my studies, I've gained a solid nderstanding of computer science 
          and web development concepts, and have dedicated a lot of my free time to 
          apply these concepts to real-world scenarios and applications.
        </p>
        
      </div>
      
    </div>
    
  );
}

export default Skills;