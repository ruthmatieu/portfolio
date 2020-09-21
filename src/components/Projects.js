import React, { useState } from 'react';

function Projects(props) {

  const [info, setInfo] = useState();
  const [newImage, setNewImage] = useState()

  function transition(item) {
    
  }

  return (
    <div className="projects-container">
      <img 
        src={props.image}
        alt={props.title} 
        onMouseOver={() => 
          {setInfo(props.desc)}
        }
        onMouseLeave={() => 
          {setInfo()}
        }
        />
      <h1 className="project-info">{info}</h1>
    </div>
  );
}

export default Projects;
