import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
import styled from 'styled-components';
import breakpoint from './breakpoints';

//
import Homepage from './components/Homepage';
import LaceUp from './components/work/LaceUp';
import Potluck from './components/work/Potluck';
import ChowDining from './components/work/ChowDining';
import Travelopia from './components/Travelopia';

//images
import logo from './images/logo.png'

function App() {  

  return (
    <WrapperDiv>
      <header>
        <Nav>
          <StyledLink to='/'><img src={logo} alt='logo'/></StyledLink>
          {/* <p>resume</p> */}
        </Nav>
      </header>

      <Switch>
        <ScrollToTop>
        <Route exact path='/' component={Homepage}/>
        <Route path='/project-laced-up' component={LaceUp}/>
        <Route path='/project-potluck-planner' component={Potluck}/>
        <Route path='/project-chow-dining' component={ChowDining}/>
        <Route path='/travelopia' component={Travelopia}/>
        <Route path='/lambda-school' component={''}/>
        </ScrollToTop>
    </Switch>
    </WrapperDiv>
  );
}

export default App;

const WrapperDiv = styled.div`
  // display: grid;
  // place-items: center;
  // width: 1024px;
  

  header {
    position: relative;
    z-index: 3;
    
  }

`

const Nav = styled.nav`

  display: flex;  
  justify-content: space-between;
  padding: 20px 0;
  background-color: #F9F9FC;
  
    img {
      width: 140px;
      padding-left: 20px;
    }
    @media only screen and ${breakpoint.device.tablet} {
      img {
        padding-left: 40px;
      }
    }

    @media only screen and ${breakpoint.device.desktop} {
      img {
        padding-left: 50px;
      }
    }
`;

const StyledLink = styled(Link)`

    @media only screen and ${breakpoint.device.desktop} {
      
      max-width: 1290px;
      margin: 0 auto;
    }
`;
