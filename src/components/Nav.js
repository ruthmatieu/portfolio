import React, { useState } from 'react';
import logo from '../images/pic001.jpg';
import ToggleButton from 'react-toggle-button';


class Nav extends React.Component {

  render(props){
    return (
      <nav>
        <ul>
          <li>{logo}</li>
        </ul>
        <ul>
          <ToggleButton
            
          />
        </ul>
      </nav>
    );
  }

}

export default Nav;