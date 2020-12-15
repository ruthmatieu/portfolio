import React from 'react';
import ToggleButton from 'react-toggle-button';
import {Link} from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {

    return (
      <nav>
        <div className="nav-item">
          <Link to='/'><p className="logo">Alanna Mathieu</p></Link>
        </div>
        <div className="nav-item">
          <ToggleButton/>
        </div>
      </nav>
    );
  

}

export default Nav;