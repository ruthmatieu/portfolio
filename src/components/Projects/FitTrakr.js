import React from 'react';
import Nav from '../Nav';

//images
import homepage from '../../images/the-chow-homepage.png';
import snippetOne from '../../images/the-chow-one.png';
import spotlightOne from '../../images/the-chow-spotlight-one.png';
import spotlightTwo from '../../images/the-chow-spotlight-two.png';
import spotlightThree from '../../images/the-chow-spotlight-three.png';

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
            
            <div className='project-wrapper-section'>
                <h1 className='project-title-one'>FitTrak'r</h1>
                <p>Introduction (few sentences that explains that the app is about).<br/>
                    Lavabeans Coffee is a React Application built for a self roasting coffee kit. I built this project from scratch.
                    Introduction (few sentences that explains that the app is about).
                    Lavabeans Coffee is a React Application built for a self roasting coffee kit. I built this project from scratch.
                </p>
                
                <div className='tech-stack'>
                    <div>
                        <p>Tech stack:<br/> React, Redux, CSS, HTML5, Styled Components</p>
                    </div>
                    <div>
                        <p className='link'><a style={{color: 'pink', textDecoration: 'none'}} href={data.link} target='_blank' rel="noopener noreferrer">View project</a></p>
                        <p className='link'><a style={{color: 'pink', textDecoration: 'none'}} href={data.github} target='_blank' rel="noopener noreferrer">View GitHub</a></p>
                    </div>
                </div>
                
            </div>
            <div>
                <img src={homepage} alt='homepage' className='homepage'/>
            </div>
            
            <div className='project-details'>
                <h3 className='section-title'>Purpose + Goal</h3>
                <div className='details'>
                    <p style={{paddingBottom: '20px'}}>This project included 3 phases. There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration in some form, by injected humour, or randomised words 
                        which don't look even slightly believable. If you are going to use a passage of 
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the 
                        middle of text. </p>

                        <p style={{paddingBottom: '20px'}}>All the Lorem Ipsum generators on the Internet tend to repeat 
                        predefined chunks as necessary, making this the first true generator on the 
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful 
                        of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                        The generated Lorem Ipsum is therefore always free from repetition, injected 
                        humour, or non-characteristic words etc.</p>

                        <p>All the Lorem Ipsum generators on the Internet tend to repeat 
                        predefined chunks as necessary, making this the first true generator on the 
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful 
                        of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                        The generated Lorem Ipsum is therefore always free from repetition, injected 
                        humour, or non-characteristic words etc.</p>
                </div>
                <img src={snippetOne} alt='project screenshot' className='project-img'/>
            </div>

            <div className='project-details'>
                <h3 className='section-title'>Spotlight</h3>
                <div className='details'>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration in some form, by injected humour, or randomised words 
                        which don't look even slightly believable. If you are going to use a passage of 
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the 
                        middle of text. All the Lorem Ipsum generators on the Internet tend to repeat 
                        predefined chunks as necessary, making this the first true generator on the 
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful 
                        of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                        The generated Lorem Ipsum is therefore always free from repetition, injected 
                        humour, or non-characteristic words etc.</p>
                </div>
                <div>
                    <img className='project-img' style={{marginBottom: '50px'}} src={spotlightThree} alt='project screenshot'/>
                    <div style={{paddingBottom: '50px', display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap'}}>
                        <img src={spotlightOne} alt='project screenshot' className='project-img'/>
                        <img src={spotlightTwo} alt='project screenshot' className='project-img'/>
                    </div>
                </div>
                
            </div>

            <div className='project-details'>
                <h3 className='section-title'>Problems + Lessons Learned</h3>
                <div className='details'>
                    <div>
                    <p style={{paddingBottom: '20px'}}>This project included 3 phases. There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration in some form, by injected humour, or randomised words 
                        which don't look even slightly believable. If you are going to use a passage of 
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the 
                        middle of text. </p>

                        <p style={{paddingBottom: '20px'}}>All the Lorem Ipsum generators on the Internet tend to repeat 
                        predefined chunks as necessary, making this the first true generator on the 
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful 
                        of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                        The generated Lorem Ipsum is therefore always free from repetition, injected 
                        humour, or non-characteristic words etc.</p>

                        <p>All the Lorem Ipsum generators on the Internet tend to repeat 
                        predefined chunks as necessary, making this the first true generator on the 
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful 
                        of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                        The generated Lorem Ipsum is therefore always free from repetition, injected 
                        humour, or non-characteristic words etc.</p>
                    </div>
                    <p>This became a bigger app than intended and had to incorporate Redux to handle data.</p>
                    <p>This app became very messy with vanilla CSS, for this reason styled-components became more better.</p>

                    <p>As for lessons learned, I lerned a lot.</p>
                </div>
            </div>

            <div>
                <h4 style={{fontSize: '1.5rem', padding: '150px 0 50px 0'}}>View more projects:</h4>
                <p>include project here</p>
            </div>
            
        </div>
    )
}

export default Lavabeans;