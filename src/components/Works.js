import React from 'react';
import ImageGallery from 'react-image-gallery';

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
      tech: 'JavaScript, HTML5, CSS',
      category: 'Static website',
      link: 'https://www.chowdining.com/',
      github: 'https://github.com/ruthmatieu/ruthmatieu.github.io'
    },
    {
      id: 3,
      title: 'Doodle Jump',
      image: lavabeans,
      description: 'A Vanilla JavaScript clone of the infamous Doodle Jump game.',
      tech: 'JavaScript, HTML5, CSS',
      category: 'Game',
      link: 'https://doodle-jump.vercel.app/',
      github: 'https://github.com/ruthmatieu/doodle-jump'
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
 
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
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
  
  class MyGallery extends React.Component {
    render() {
      return <ImageGallery items={images} />;
    }
  }

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
                <p style={{color: '#88BBBC'}}>Technologies:</p>
                <p>{project.tech}</p>
              </div>
              <div>
                <p style={{color: '#88BBBC'}}>Category:</p>
                <p>{project.category}</p>
              </div>
            </div>

            <div>
              <button className="proj-btn"><a style={{color: 'white', textDecoration: 'none', padding: '0 5px'}} href={project.link} target='_blank' rel="noopener noreferrer">Project</a></button>
              <button className="proj-btn"><a style={{color: 'white', textDecoration: 'none', padding: '0 5px'}} href={project.github} target='_blank' rel="noopener noreferrer">GitHub</a></button>
            </div>

          </div>
        </div>
      ))}
    </div>
    
  );
}

export default Works;