import React from 'react';

//comps
import Nav from './Nav';
import Footer from './Footer';

//images
import imageOne from '../images/travelopia-one.png';
import imageTwo from '../images/travelopia-two.jpg';
import imageThree from '../images/travelopia-three.jpg';
import imageFour from '../images/travelopia-four.png';

//1yr • 1 year ago Had a great day working on digital marketing at the Grow boating Marketing Summit #boating #salesandmarketing #mymoorings The Moorings Yacht Charters
function Travelopia() {

  const lightblue = '#89BEAF';
  
  return (
      
    <div>
      <Nav/>
      <div style={{padding: '50px 250px 0 250px', textAlign: 'left'}}>
        <h2 style={{color: lightblue, fontWeight: '900', fontSize: '2.5rem', padding: '30px 0 50px 0'}}>Working at Travelopia</h2>
        
        <p>
        I currently work as a Jr. Web Developer (Online Specialist) at <a href='https://www.travelopia.com/' target='_blank' rel="noopener noreferrer">Travelopia</a>, a travel/leisure 
        company located in Clearwater, FL. Since I first began in August 2019, this has proved to be an amazing experience 
        where I was able to work alongside senior Developers and experienced Designers to build multiple powerful client facing products.
        Throughout the summer I was pushed and challenged in every aspect of my skills and walked away as a much more refined developer.
        </p>
        
      </div>

      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '50px'}}>
        <img src={imageOne} alt='' style={{ minWidth: '200px', maxWidth: '900px'}}/>
      </div>

      <div style={{textAlign: 'left', paddingLeft: '250px'}}>
                <h3 style={{fontSize: '2rem', padding: '120px 0 50px 0'}}>Personal Goals</h3>
                <div style={{padding: '0 250px 80px 0'}}>
                    <p style={{paddingBottom: '20px'}}>Priot to working at Travelopia, I had set a few goals for myself. project included 3 phases. There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration in some form, by injected humour, or randomised words 
                        which don't look even slightly believable. If you are going to use a passage of 
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the 
                        middle of text. </p>

                        <p>All the Lorem Ipsum generators on the Internet tend to repeat 
                        predefined chunks as necessary, making this the first true generator on the 
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful 
                        of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                        The generated Lorem Ipsum is therefore always free from repetition, injected 
                        humour, or non-characteristic words etc.</p>
                </div>
                <img style={{maxWidth: '900px'}} src={imageFour} alt='image-ayye'/>
            </div>

            <div style={{textAlign: 'right', paddingRight: '250px'}}>
                <h3 style={{fontSize: '2rem', padding: '120px 0 50px 0'}}>Challenges + Growth</h3>
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
                
            </div>
      <Footer/>
    </div>
    
  );
}

export default Travelopia;