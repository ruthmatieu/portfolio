import React from 'react';

//images
import skills from '../images/skills.svg';
import reactCard from '../images/react-skill-card.svg';
import frontEndCard from '../images/html-css-js-skills-card.svg';
import backEndCard from '../images/back-end-dev-skills-card.svg';
import frontDesignCard from '../images/front-end-design-skills.svg';


function Skills() {

  const lightblue = '#89BEAF';

  const skillsCards = [
    {
      id: 1,
      image: frontEndCard,
      name: 'Front-End Development skill card'
    },
    {
      id: 2,
      image: reactCard,
      name: 'React skill card'
    },
    {
      id: 3,
      image: backEndCard,
      name: 'Back-End Development skill card'
    },
    {
      id: 4,
      image: frontDesignCard,
      name: 'Front-End Design skill card'
    },
    {
      id: 5,
      image: frontEndCard
    },
    {
      id: 6,
      image: reactCard
    }
  ]
  
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

      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '100px 0'}}>
        {skillsCards.map(item => {
          return (
            <div style={{paddingTop: '40px'}}>
              <img style={{ minWidth: '200px', maxWidth: '300px', boxShadow: '0px 0px 33px 16px rgba(244,245,249,0.95)'}} src={item.image} alt={`${item.name}`}/>
            </div>
          )
        })}
      </div>
      
    </div>
    
  );
}

export default Skills;