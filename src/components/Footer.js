import React from 'react';

function Footer() {

  const lightblue = '#89BEAF';

  return (
    <footer style={{padding: '0 0 10px 0'}}>
      <h2 style={{color: lightblue, textAlign: 'left', fontWeight: '900', fontSize: '2.5rem', padding: '30px 0'}}>Let's collaborate or connect</h2>
      <div style={{textAlign: 'left', padding: '0 0 100px 0'}}>
        <p>Feel free to reach out if you're looking for a developer, 
          have a question, or just want to connect.</p>
        <a href="mailto:matieu.ruth@gmail.com" className="btn-link">Start a conversation</a>.
      </div>
      <div>
        <p>© 2021 Copyright Ruth Matieu</p>
      </div>
    </footer>
  );
}

export default Footer;