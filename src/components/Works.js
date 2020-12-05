import React from 'react';
import ImageGallery from 'react-image-gallery';
import Project from './Project';
import {Link} from 'react-router-dom'

//project images
import lavabeans from '../images/lavabeans.png';
import thechow from '../images/the-chow.png';
import fittrackr from '../images/fit-trackr.png';

//

function Works() {
  const projectsData = [
    {
      id: 1,
      title: 'Lavabeans Coffee Company',
      image: lavabeans,
      description: 'Business Bank Account Dashboard using React, Python and Django. This dashboard uses Authentication and Companies House API. Please make sure to register to view its full capacity, or view screenshots on my GitHub ReadMe file here.',
      tech: 'React, Redux, CSS, HTML5',
      category: 'Web Application',
      link: '/lavabeans-coffee',
    },
    {
      id: 4,
      title: 'The Chow',
      image: thechow,
      description: 'An app that allows user to rate burgers as well as nominate their favorite. The dashboard uses Authentication and a geolocation API, as well as Brewdogs open API. Please make sure to ',
      tech: 'JavaScript, HTML5, CSS',
      category: 'Static website',
      link: '/the-chow',
    },
    {
      id: 2,
      title: 'Fit Trackr',
      image: fittrackr,
      description: 'A Vanilla JavaScript clone of the infamous Doodle Jump game.',
      tech: 'React, Redux, Firebase, Node, Express, HTML5, CSS',
      category: 'Game',
      link: '/fit-trakr',
    }
  ]
  const lightblue = '#82B4C3';

  return (
    <div style={{padding: '0 0 80px 0'}}>
      <h5 style={{textAlign: 'left', color: lightblue, fontWeight: '900', fontSize: '2rem', padding: '30px 0'}}>Portfolio</h5>
      <p style={{padding: '0 40px', textAlign: 'left'}}>I like to stay busy and always have a project in the works. Take a look at some of the applications, articles, and companies I've dedicated my time to.</p>
      {projectsData.map(project => (
        <div id={project.id}>

          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'space-around', boxShadow: '0px 0px 33px 16px rgba(244,245,249,0.95)', margin: '30px 0'}}>
            <img 
              style={{width: '400px',height: '210px', marginTop: '60px'}} 
              src={project.image} 
              alt={project.title}
            
            />
            <Project
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          
        </div>
      ))}
    </div>
    
  );
}

export default Works;