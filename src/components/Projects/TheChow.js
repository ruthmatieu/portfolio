import React from 'react';
import Nav from '../Nav';

//images
import homepage from '../../images/the-chow-homepage.png';
import snippetOne from '../../images/the-chow-one.png';
import spotlightOne from '../../images/the-chow-spotlight-one.png';
import spotlightTwo from '../../images/the-chow-spotlight-two.png';
import spotlightThree from '../../images/the-chow-spotlight-three.png';

const TheChow = () => {
    const data = {
          id: 1,
          title: 'The Chow Restaurant',
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
                <h1 style={{fontSize: '3rem', padding: '50px 0'}}>{data.title}</h1>
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
                <img style={{maxWidth: '60%', boxShadow: '0px 0px 33px 16px rgba(243,171,129,0.40)'}} src={homepage} alt='project homepage screenshot'/>
            </div>

            <div style={{textAlign: 'left', paddingLeft: '250px'}}>
                <h3 style={{fontSize: '2rem', padding: '150px 0 50px 0'}}>Purpose + Goal</h3>
                <div style={{padding: '0 250px 80px 0'}}>
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
                <img style={{maxWidth: '60%', boxShadow: '0px 0px 33px 16px rgba(243,171,129,0.20)'}} src={snippetOne} alt='project screenshot'/>
            </div>

            <div style={{textAlign: 'right', paddingRight: '250px'}}>
                <h3 style={{fontSize: '2rem', padding: '150px 0 50px 0'}}>Spotlight</h3>
                <div style={{padding: '0 0 80px 250px'}}>
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
                    <img style={{maxWidth: '800px',  marginBottom: '50px', boxShadow: '0px 0px 33px 16px rgba(243,171,129,0.20)'}} src={spotlightThree} alt='project screenshot'/>
                    <div style={{paddingBottom: '150px', display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap'}}>
                        <img style={{width: '500px', boxShadow: '0px 0px 33px 16px rgba(243,171,129,0.20)'}} src={spotlightOne} alt='project screenshot'/>
                        <img style={{width: '600px', boxShadow: '0px 0px 33px 16px rgba(243,171,129,0.20)'}} src={spotlightTwo} alt='project screenshot'/>
                    </div>
                </div>
                
            </div>

            <div style={{textAlign: 'center'}}>
                <h3 style={{fontSize: '2rem', padding: '0 0 50px 0'}}>Problems + Lessons Learned</h3>
                <div style={{padding: '0 250px', textAlign: 'left'}}>
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

export default TheChow;