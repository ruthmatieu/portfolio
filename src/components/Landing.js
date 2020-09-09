import React, { useState } from 'react';

function Landing() {
    const shortestIntro = 'Hi my name is Ruth. But I prefer Alanna.';
    const mediumIntro = `Hi my name is Ruth, But I prefer Alanna. I'm a web developer. Alanna 
      works as a principal developer experience engineer at Netlify, where he works to improve 
      the experience of building and deploying to the modern web.`;
    const longIntro = `I am long intro. Alanna works as a principal developer experience engineer 
      at Netlify, where he works to improve the experience of building and deploying to the modern 
      web. He also hosts Learn With Jason, a live-streamed video show where he pair programs to learn 
      something new in 90 minutes. He spends a lot of time writing to share what he’s learned in tech 
      as well as stories about how he used to suck`;
    const longestIntro = `Alanna works as a principal developer experience engineer at Netlify, 
      where he works to improve the experience of building and deploying to the modern web. 
      He also hosts Learn With Jason, a live-streamed video show where he pair programs to 
      learn something new in 90 minutes. He spends a lot of time writing to share what he’s 
      learned in tech as well as stories about how he used to suck, listened to people who 
      taught him valuable lessons, and made changes that helped him suck less. This frequently 
      boils down to telling people that the formula for success and happiness is to lift each 
      other up at every opportunity and share what we learn, even when it feels like something 
      that’s been shared before or that “everybody already knows”. He is trying his very best 
      to follow his own advice. He lives in Portland, Oregon.`;

    const [intro, setIntro] = useState(shortestIntro); 
  return (
    <div className="intro-container">
        <div className="left-intro">
            <p>Ala<br/><span>nna</span></p>
        </div>
        <div className="right-intro">
            <p>Adjust bio length:</p>
            <div className="landing-btn-div">
              <p className="landing-page-btn" onClick={()=> setIntro(shortestIntro)}><span role="img"><i class="fas fa-circle"></i></span></p>
              <p className="landing-page-btn" onClick={()=> setIntro(mediumIntro)}><span role="img"><i class="fas fa-circle"></i></span></p>
              <p className="landing-page-btn" onClick={()=> setIntro(longIntro)}><span role="img"><i class="fas fa-circle"></i></span></p>
              <p className="landing-page-btn" onClick={()=> setIntro(longestIntro)}><span role="img"><i class="fas fa-circle"></i></span></p>
            </div>
            <p>{intro}</p>
        </div>
    </div>
  );
}

export default Landing;