import React from 'react';

function Project(props) {
  
  return (
    <div>
        <div style={{width: '600px', height: '200px', padding: '20px 0', marginTop: '60px', backgroundColor: '', display: 'grid', placeItems: 'center'}}>

            <h1 style={{color: 'white', fontSize: '2rem', fontWeight: '900'}}>{props.title}</h1>
            <p style={{color: 'white', padding: '0 50px', fontSize: '1rem', lineHeight: '1.5rem'}}>{props.description}</p>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{padding: '0 10px'}}>
                <p style={{color: '#88BBBC'}}>Technologies:</p>
                <p style={{color: '#88BBBC'}}>{props.tech}</p>
            </div>
            <div>
                <p style={{color: '#88BBBC'}}>Category:</p>
                <p style={{color: '#88BBBC'}}>{props.category}</p>
            </div>
            </div>

            <div>
            <button className="proj-btn"><a style={{color: 'white', textDecoration: 'none', padding: '0 5px'}} href={props.link} target='_blank' rel="noopener noreferrer">Project</a></button>
            <button className="proj-btn"><a style={{color: 'white', textDecoration: 'none', padding: '0 5px'}} href={props.github} target='_blank' rel="noopener noreferrer">GitHub</a></button>
            </div>

        </div>
    </div>
    
  );
}

export default Project;