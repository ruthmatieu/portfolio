import React, { useState } from 'react';
import backgroundImg from '../images/background.svg';


function Projects(props) {
  const image = props.image;
  const newImage = backgroundImg;

  const [info, setInfo] = useState(false);
  
  

  function transition(item) {
    
  }

  return (
    <div className="projects-container">
      <div /*onMouseOver={()=>setInfo(!info)}*/>
        {info === false ? <img src={image} /> : <img src={newImage}/>}
      </div>
      {/* <img 
        src={image}
        alt={props.title} 
        onMouseOver={() => 
          {setInfo(props.desc)}
        }
        onMouseLeave={() => 
          {setInfo()}
        }
        />
      <img 
        src={newImage}
        alt={props.title} 
        onMouseOver={() => 
          {setInfo(props.desc)}
        }
        onMouseLeave={() => 
          {setInfo()}
        }
      /> */}
      {/* <h1 className="project-info">{info}</h1> */}
    </div>
  );
}

export default Projects;
