import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
import styled from 'styled-components';
import breakpoint from './breakpoints';

//
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import LaceUp from './components/work/LaceUp';
import Footer from './components/Footer';

function App() {  

  return (
    <div>
      <header>
        <Nav>
          <Link to='/'><img src='' alt='logo'/></Link>
          <p>resume</p>
        </Nav>
      </header>

      <Switch>
        <ScrollToTop>
        <Route exact path='/' component={Homepage}/>
        <Route path='/project-laced-up' component={LaceUp}/>
        <Route path='/project-potluck-planner' component={''}/>
        <Route path='/project-the-chow' component={''}/>
        <Route path='/travelopia' component={''}/>
        <Route path='/lambda-school' component={''}/>
        </ScrollToTop>
    </Switch>
    </div>
  );
}

export default App;

const Nav = styled.nav`

  display: flex;  
  justify-content: space-between;
  padding: 20px 0;
  
    img {

    }
    @media only screen and ${breakpoint.device.laptop} {
        
    }

    @media only screen and ${breakpoint.device.desktop} {
        
    }
`;