import React from 'react';

//project images
import lavabeans from '../images/lavabeans.png';
import thechow from '../images/the-chow.jpg';
import projectThree from '../images/drawing.svg';

//style={{backgroundImage:`url(${project.image})`, display: 'flex'}}

function Works() {
  const projectsData = [
    {
      id: 1,
      title: 'Lavabeans Coffee Company',
      image: lavabeans,
      description: 'Business Bank Account Dashboard using React, Python and Django. This dashboard uses Authentication and Companies House API. Please make sure to register to view its full capacity, or view screenshots on my GitHub ReadMe file here.',
      tech: 'React, Redux, CSS, HTML5',
      category: 'Web Application',
      link: '',
      github: ''
    },
    {
      id: 2,
      title: 'The Chow',
      image: thechow,
      description: 'An app that allows user to rate burgers as well as nominate their favorite. The dashboard uses Authentication and a geolocation API, as well as Brewdogs open API. Please make sure to ',
      tech: '',
      category: '',
      link: 'https://www.chowdining.com/',
      github: 'https://github.com/ruthmatieu/ruthmatieu.github.io'
    },
    {
      id: 3,
      title: 'JavaScript Game',
      image: lavabeans,
      description: 'This is description for project 3',
      tech: '',
      category: '',
      link: '',
      github: ''
    },
    {
      id: 2,
      title: 'Revenoo',
      image: lavabeans,
      description: 'This is description for project 2',
      tech: '',
      category: '',
      link: '',
      github: ''
    }
  ]

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: '#E7F0EF'}}>
      {projectsData.map(project => (
        <div id={project.id} style={{display: 'flex', flexWrap: 'wrap'}}>

          <img style={{width: '500px', marginTop: '60px'}} src={project.image} alt={project.title}/>
          <div style={{width: '500px', marginTop: '60px', backgroundColor: 'white', display: 'grid', placeItems: 'center'}}>

            <h1 style={{color: '#2B2C2B', fontSize: '2rem', fontWeight: '900'}}>{project.title}</h1>
            <p style={{padding: '0 50px', fontSize: '1rem', lineHeight: '1.5rem'}}>{project.description}</p>
            
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{padding: '0 10px'}}>
                <p style={{color: 'orange'}}>Technologies:</p>
                <p>{project.tech}</p>
              </div>
              <div>
                <p>Category:</p>
                <p>{project.category}</p>
              </div>
            </div>

            <div>
              <a style={{color: 'red', textDecoration: 'none', padding: '0 5px', fontSize: '1rem', fontWeight: '900'}} href={project.link} target='_blank' rel="noopener noreferrer">Project</a>
              <a style={{color: 'red', textDecoration: 'none', padding: '0 5px', fontSize: '1rem', fontWeight: '900'}} href={project.github} target='_blank' rel="noopener noreferrer">GitHub</a>
            </div>

          </div>
        </div>
      ))}
    </div>
    
  );
}

export default Works;