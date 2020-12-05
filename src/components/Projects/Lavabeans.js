import React from 'react';
import Nav from '../Nav';

//images
import homepage from '../../images/the-chow-homepage.png';

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
            <Nav/>
            
            <div style={{textAlign: 'center'}}>
                <h1 style={{fontSize: '3rem', padding: '50px 0'}}>Lavabeans Coffee Co.</h1>
                <p style={{padding: '0 250px', textAlign: 'left'}}>Introduction (few sentences that explains that the app is about).<br/>
                    Lavabeans Coffee is a React Application built for a self roasting coffee kit. I built this project from scratch.
                    Introduction (few sentences that explains that the app is about).
                    Lavabeans Coffee is a React Application built for a self roasting coffee kit. I built this project from scratch.
                </p>
                
                <div style={{display: 'flex', justifyContent:'space-around' , padding: '50px 250px'}}>
                    <div>
                        <p>Tech stack:<br/> React, Redux, CSS, HTML5, Styled Components</p>
                    </div>
                    <div>
                        <p><a style={{color: 'pink', textDecoration: 'none', padding: '0 5px'}} href={data.link} target='_blank' rel="noopener noreferrer">View project</a></p>
                        <p><a style={{color: 'pink', textDecoration: 'none', padding: '0 5px'}} href={data.github} target='_blank' rel="noopener noreferrer">View GitHub</a></p>
                    </div>
                </div>
                <img style={{maxWidth: '60%', boxShadow: '0px 0px 33px 16px rgba(219,233,235,0.95)'}} src={homepage} alt='homepage'/>
            </div>

            <div style={{textAlign: 'left'}}>
                <h3>Purpose + Goal</h3>
                <p>This project included 3 phases</p>
                <img src='' alt='image-ayye'/>
            </div>

            <div style={{textAlign: 'right'}}>
                <h3>Spotlight</h3>
                <p>explain the parts you;re proud of</p>
                <img src='' alt='image-three'/>
                <img src='' alt='image-two'/>
                <img src='' alt='image-three'/>
            </div>

            <div style={{textAlign: 'center'}}>
                <h3>Problems + Lessons Learned</h3>
                <p>This became a bigger app than intended and had to incorporate Redux to handle data.</p>
                <p>This app became very messy with vanilla CSS, for this reason styled-components became more better.</p>

                <p>As for lessons learned, I lerned a lot.</p>
            </div>

            <div>
                <h4>View more projects:</h4>
                <p>include project here</p>
            </div>
            
        </div>
    )
}

export default Lavabeans;