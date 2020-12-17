import React from 'react';

//
import instaGallery from '../images/insta-grid.svg';

const InstagramFooter = () => {

    return (
        <footer className='ig-footer'>
            <div className='footer-wrapper'>
                <h5>Let's collaborate or connect</h5>
                <div className='cta-description'>
                    <p>Feel free to reach out if you're looking for a developer, 
                        have a question, or just want to connect.</p>
                    <a href="mailto:matieu.ruth@gmail.com" className="btn-link">Start a conversation</a>
                </div>
            </div>
            <div className='insta-section'>
                <div className='flex-detail'>
                    <div className='insta-details'>
                        <h6>Cooler on the gram.</h6>
                        <a href='https://www.instagram.com/alanna.code/' target='_blank' className="btn-link">Check me out</a>
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