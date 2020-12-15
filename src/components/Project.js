import React from 'react';
import {Link} from 'react-router-dom';

function Project(props) {
  
  return (
    <div>
        <div className='project'>

          <Link className='project-title-link' to={props.link}>
            <h6 className='project-title'>{props.title}</h6>
          </Link>
          <p className='project-description'>{props.description}</p>

          <div className='project-link'>
            <p><a className="btn-link" href={props.link} rel="noopener noreferrer">{props.category} &#187;</a></p>
          </div>

        </div>
    </div>
    
  );
}

export default Project;