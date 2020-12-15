import React from 'react';
import ToggleButton from 'react-toggle-button';
import {Link} from 'react-router-dom';

function Nav() {

    return (
      <nav>
        <div className="nav-item">
          <Link to='/'><h4 className="logo">Alanna Mathieu</h4></Link>
        </div>
        <div className="nav-toggle">
          <ToggleButton/>
        </div>
      </nav>
    );
  

}

export default Nav;