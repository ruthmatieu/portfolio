import React from 'react';
import logo from '../images/logo.svg';
import ToggleButton from 'react-toggle-button';



function Nav() {

    return (
      <nav>
        <div className="nav-item">
          <p className="logo">Alanna Mathieu</p>
        </div>
        <div className="nav-item">
          <ToggleButton/>
        </div>
      </nav>
    );
  

}

export default Nav;