import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';

//
import instaGallery from '../images/insta-grid.svg';

const InstagramFooter = () => {
    const lightblue = '#89BEAF';

    return (
        <footer style={{margin: '100px 0 20px 0'}}>
            <div>
                <h2 style={{color: lightblue, textAlign: 'left', fontWeight: '900', fontSize: '2.5rem', paddingBottom: '30px'}}>Let's collaborate or connect</h2>
                <div style={{textAlign: 'left', padding: '0 0 100px 0'}}>
                    <p>Feel free to reach out if you're looking for a developer, 
                        have a question, or just want to connect.</p>
                    <a href="mailto:matieu.ruth@gmail.com" className="btn-link">Start a conversation</a>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '200px'}}>
                <div style={{display: 'grid', placeItems: 'center'}}>
                    <div>
                        <h6>Cooler on the gram.</h6>
                        <a href='https://www.instagram.com/alanna.code/' target='_blank' className="btn-link">Check me out</a>
                    </div>
                </div>
                <div>
                    <img style={{width: '700px'}} src={instaGallery} alt='Instagram collage'/>
                    
                </div>
                
            </div>
            <div>
                <p>© 2021 Copyright Ruth Matieu</p>
            </div>
        </footer>
    )
}

export default InstagramFooter;