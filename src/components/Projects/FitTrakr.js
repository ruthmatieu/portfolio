import React from 'react';


const Lavabeans = () => {
    const data = {
          id: 1,
          title: 'Lavabeans Coffee Company',
          image: '',
          description: 'Business Bank Account Dashboard using React, Python and Django. This dashboard uses Authentication and Companies House API. Please make sure to register to view its full capacity, or view screenshots on my GitHub ReadMe file here.',
          tech: 'React, Redux, CSS, HTML5',
          category: 'Web Application',
          link: 'https://www.chowdining.com/',
          github: 'https://github.com/ruthmatieu/ruthmatieu.github.io'
        }

    return (
        <div>
            fit trackr description
            tech stack: Technologies:

React, Redux, CSS, HTML5

Category:

Web Application
            <button className="proj-btn"><a style={{color: 'white', textDecoration: 'none', padding: '0 5px'}} href={data.link} target='_blank' rel="noopener noreferrer">Project</a></button>
            <button className="proj-btn"><a style={{color: 'white', textDecoration: 'none', padding: '0 5px'}} href={data.github} target='_blank' rel="noopener noreferrer">GitHub</a></button>
        </div>
    )
}

export default Lavabeans;