import React from 'react';
import '../styles/Footer.css';

//
import instaGallery from '../images/insta-grid.svg';

const InstagramFooter = () => {

    return (
        <footer className='ig-footer'>
            <div className='footer-wrapper'>
                <h5 className='connect'>Let's collaborate or connect</h5>
                <div className='cta-description'>
                    <p>If you're looking for a developer, shoot me a message. If not,</p>
                    <a href="mailto:matieu.ruth@gmail.com" className="btn-link">Start a conversation</a>
                </div>
            </div>
            <div className='insta-section'>
                <div className='flex-detail'>
                    <div className='insta-details'>
                        <h6>I sometimes do cool stuff.</h6>
                        <a href='https://www.instagram.com/alanna.code/' target='_blank' rel="noopener noreferrer" className="btn-link">Check me out</a>
                    </div>
                </div>
                <div>
                    <img className='ig-grid' src={instaGallery} alt='Instagram collage'/>
                    
                </div>
                
            </div>
            <div>
                <p>© 2021 Copyright Ruth Matieu</p>
            </div>
        </footer>
    )
}

export default InstagramFooter;