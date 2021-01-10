import React from 'react';
import Project from './Project';
import {Link} from 'react-router-dom';

//project images
import lavabeans from '../images/lavabeans.png';
import thechow from '../images/the-chow.png';
import fittrackr from '../images/fit-trackr.png';
import work from '../images/travelopia-one.jpg';

//

function Portfolio() {
  const projectsData = [
    {
      id: 1,
      title: 'Lavabeans Coffee Co.',
      image: lavabeans,
      description: 'Business Bank Account Dashboard using React, Python and Django. This dashboard uses Authentication and Companies House API. Please make sure to register to view its full capacity, or view screenshots on my GitHub ReadMe file here.',
      category: 'View project',
      link: '/lavabeans-coffee',
    },
    {
      id: 4,
      title: 'The Chow',
      image: thechow,
      description: 'An app that allows user to rate burgers as well as nominate their favorite. The dashboard uses Authentication and a geolocation API, as well as Brewdogs open API. Please make sure to ',
      category: 'View project',
      link: '/the-chow',
    },
    {
      id: 2,
      title: 'Fit Trackr',
      image: fittrackr,
      description: 'Business Bank Account Dashboard using React, Python and Django. This dashboard uses Authentication and Companies House API. Please make sure to register to view its full capacity, or view screenshots on my GitHub ReadMe file here.',
      category: 'View project',
      link: '/fit-trakr',
    },
    {
      id: 3,
      title: 'Working at Travelopia',
      image: work,
      description: 'A Vanilla JavaScript clone of the infamous Doodle Jump game. Business Bank Account Dashboard using React, Python and Django. This dashboard uses Authentication and Companies House API.',
      category: 'Read story',
      link: '/travelopia',
    }
  ]

  return (
    <div className="portfolio">
      <h5>Portfolio</h5>
      <p className='about-para'>
        "The only way out is through". I have found this saying appropriate
        when applied to the art and science of coding. For this reason, I always have a 
        project in the works. For me, this has proven to be the best method of stay on top 
        of my skills and continuously learn. Take a look at some of the applications and 
        companies I have dedicated my time to.
      </p>
      {projectsData.map(project => (
        <div id={project.id}>

          <div className='project-wrapper'>
          <Link to={project.link}>
            <img 
              className='image'
              src={project.image} 
              alt={project.title}
            
            />
          </Link>
            <Project
                className='project-container'
                title={project.title}
                description={project.description}
                link={project.link}
                category={project.category}
              />
            </div>
          
        </div>
      ))}
    </div>
    
  );
}

export default Portfolio;