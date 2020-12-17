import React from 'react';

function Footer() {

  return (
    <footer className='reg-footer'>
            <div className='footer-wrapper'>
                <h5>Let's collaborate or connect</h5>
                <div className='cta-description'>
                    <p>Feel free to reach out if you're looking for a developer, 
                        have a question, or just want to connect.</p>
                    <a href="mailto:matieu.ruth@gmail.com" className="btn-link">Start a conversation</a>
                </div>
            </div>
            <div>
                <p>© 2021 Copyright Ruth Matieu</p>
            </div>
    </footer>
  );
}

export default Footer;