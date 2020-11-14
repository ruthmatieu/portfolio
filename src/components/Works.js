import React from 'react';
import ImageGallery from 'react-image-gallery';
import Projects from './Project';

//project images
import lavabeans from '../images/lavabeans.png';
import thechow from '../images/the-chow.jpg';
import fittrackr from '../images/fit-trackr.png';

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
      id: 4,
      title: 'The Chow',
      image: thechow,
      description: 'An app that allows user to rate burgers as well as nominate their favorite. The dashboard uses Authentication and a geolocation API, as well as Brewdogs open API. Please make sure to ',
      tech: 'JavaScript, HTML5, CSS',
      category: 'Static website',
      link: 'https://www.chowdining.com/',
      github: 'https://github.com/ruthmatieu/ruthmatieu.github.io'
    },
    {
      id: 2,
      title: 'Fit Trackr',
      image: fittrackr,
      description: 'A Vanilla JavaScript clone of the infamous Doodle Jump game.',
      tech: 'React, Redux, Firebase, HTML5, CSS',
      category: 'Game',
      link: 'https://doodle-jump.vercel.app/',
      github: 'https://github.com/ruthmatieu/fit-trackr/tree/master/fit-trackr'
    },
    // {
    //   id: 5,
    //   title: 'FitTrakr',
    //   image: lavabeans,
    //   description: 'A Vanilla JavaScript clone of the infamous Doodle Jump game.',
    //   tech: 'JavaScript, HTML5, CSS',
    //   category: 'Game',
    //   link: 'https://doodle-jump.vercel.app/',
    //   github: 'https://github.com/ruthmatieu/doodle-jump'
    // },
    // {
    //   id: 3,
    //   title: 'Jouveaux',
    //   image: lavabeans,
    //   description: 'A Vanilla JavaScript clone of the infamous Doodle Jump game.',
    //   tech: 'JavaScript, HTML5, CSS',
    //   category: 'E-commerce',
    //   link: 'https://doodle-jump.vercel.app/',
    //   github: 'https://github.com/ruthmatieu/doodle-jump'
    // },
  ]
 
  const images = [
    {
      original: lavabeans,
      thumbnail: lavabeans,
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  


  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: '#2B2C2B'}}>
      {projectsData.map(project => (
        <div id={project.id} style={{display: 'flex', flexWrap: 'wrap'}}>

          <div style={{display: 'flex'}}>
          <img 
            style={{width: '400px',height: '200px', marginTop: '60px'}} 
            src={project.image} 
            alt={project.title}
            
            />
            <Projects
                title={project.title}
                description={project.description}
                tech={project.tech}
                category={project.category}
                link={project.link}
                github={project.github}
              />
            </div>
          
        </div>
      ))}
    </div>
    
  );
}

export default Works;