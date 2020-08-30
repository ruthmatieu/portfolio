import React from 'react';
import { Route, Link } from 'react-router-dom';
import './styles/main.css';

//components
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Work from './components/Work';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Landing />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
