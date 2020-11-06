import React, { useState } from 'react';
import backgroundImg from '../images/background.svg';


function Projects(props) {
  

  return (
    <div className="projects-container">
      {/*
      <div onMouseOver={()=>setInfo(!info)}>
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
      /> 
      <h1 className="project-info">{info}</h1> */}
      <div className="project-one"
        
      >
        <div>
          <img src={props.image}/>
          <div>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
        </div>

      </div>
    </div>
    
  );
}

export default Projects;
