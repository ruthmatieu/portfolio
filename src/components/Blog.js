import React from 'react';

function Blog() {

  const lightblue = '#82B4C3';
  
  const fetch = require('node-fetch');

    fetch('https://api.hashnode.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': "781e2e68-60ee-4e1a-8ea5-0fc8c760df72"},
        body: JSON.stringify({
            query: 'query { storiesFeed(type: GLOBAL){ title } }'
        }),
    })
        .then(res => {
            res.json()
        })
        .then(res => console.log(JSON.stringify(res)))
  
  return (
    <div>
      <div style={{textAlign: 'left'}}>
        <h2 style={{color: lightblue, fontWeight: '900', fontSize: '2.5rem', padding: '30px 0 90px 0'}}>Hire Me</h2>
        <p>
          The more I learn, the more necessary I have found it to be to write things down. Keeping blog posts
          on certain topics allowed me to dig deeper and invest more time towards them in a more productive effort at 
          understanding.
        </p>
        <p>Check out my latest blog posts below.</p>

        <div></div>
        
      </div>
      
    </div>
    
  );
}

export default Blog;