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
    // {
    //   id: 5,
    //   image: frontEndCard
    // },
    // {
    //   id: 6,
    //   image: reactCard
    // }
  ]
  
  return (
    <div className='skills-wrapper'>
      <div style={{textAlign: 'left'}}>
        <h5>My Skills</h5>
        <div style={{display: 'grid', placeItems: 'center', paddingBottom: '20px'}}>
          <img className='skills-image' src={skills} alt='skills'/>
        </div>
        
        <p>
          Throughout my studies, I have acquired a solid understanding of web foundations,
          computer science, and the importance of accessability. My knowledge can be found 
          in the form of the following tech stacks: HTML & CSS, JavaScript, React, Redux,
          Node, SQL, Jira, LESS, Python, Express, Cypress.io, Bootstrap, GSAP, Jest, React Testing Library and much more. Below, I have 
          highlighted the key technical skills I bring to my projects.
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