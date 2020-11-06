import React from 'react';

//components
import Nav from './components/Nav';
import Landing from './components/Landing';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {  

  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
