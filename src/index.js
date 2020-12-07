import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router , Route, Switch} from "react-router-dom";

//
import Lavabeans from './components/Projects/Lavabeans';
import TheChow from './components/Projects/TheChow';
import FitTrakr from './components/Projects/FitTrakr';
import Travelopia from './components/Travelopia';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/lavabeans-coffee' component={Lavabeans}/>
      <Route path='/the-chow' component={TheChow}/>
      <Route path='/fit-trakr' component={FitTrakr}/>
      <Route path='/travelopia' component={Travelopia}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
