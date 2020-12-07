import React from 'react';

function Footer() {

  const lightblue = '#89BEAF';

  return (
    <footer style={{textAlign: 'left'}}>
      <h2 style={{color: lightblue, fontWeight: '900', fontSize: '2.5rem', padding: '30px 0'}}>Let's Connect</h2>
      <p>Feel free to reach out if you're looking for a developer, 
        have a question, or just want to connect.</p>
      <p>ruth.matieu@gmail.com</p>
      <div>
        <p>© 2021 Copyright Ruth Matieu</p>
      </div>
    </footer>
  );
}

export default Footer;