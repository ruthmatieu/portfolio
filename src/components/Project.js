import React from 'react';
import {Link} from 'react-router-dom';

function Project(props) {
  
  return (
    <div>
        <div style={{width: '600px', height: '200px', padding: '20px 0', marginTop: '60px', backgroundColor: '', display: 'grid', placeItems: 'center'}}>

        <Link to={props.link} style={{color: 'black', textDecoration: 'none'}}><h1 style={{color: '', fontSize: '2rem', fontWeight: '900'}}>{props.title}</h1></Link>
            <p style={{color: '#9C9C9C', padding: '0 50px', fontSize: '1rem', lineHeight: '1.5rem'}}>{props.description}</p>


            <div>
              <p><a className="btn-link" href={props.link} rel="noopener noreferrer">{props.category} &#187;</a></p>
            </div>

        </div>
    </div>
    
  );
}

export default Project;