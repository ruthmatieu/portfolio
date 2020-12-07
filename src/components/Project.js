import React from 'react';

function Project(props) {
  
  return (
    <div>
        <div style={{width: '600px', height: '200px', padding: '20px 0', marginTop: '60px', backgroundColor: '', display: 'grid', placeItems: 'center'}}>

            <h1 style={{color: '', fontSize: '2rem', fontWeight: '900'}}>{props.title}</h1>
            <p style={{color: '#9C9C9C', padding: '0 50px', fontSize: '1rem', lineHeight: '1.5rem'}}>{props.description}</p>


            <div>
              <p><a style={{color: '#89BEAF', textDecoration: 'none', padding: '0 5px'}} href={props.link} rel="noopener noreferrer">View project</a></p>
            </div>

        </div>
    </div>
    
  );
}

export default Project;