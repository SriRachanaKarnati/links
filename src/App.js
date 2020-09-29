import React from 'react';

import './App.css';
import GettingStarted from './components/GettingStarted';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Showcase from './components/Showcase';
import Startinganewproject from './components/Startinganewproject';
import Developerprereading from './components/Developerprereading';
import Developersetup from './components/Developersetup';
import Howtocontribute from './components/Howtocontribute';
import Adaptercodebase from './components/Adaptercodebase';
import Whoswho from './components/Whoswho';
import Slack from './components/Slack';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">   
    
      <Switch>
          <Route exact path='/' component={GettingStarted} />
         <Route exact path='/GettingStarted' component={GettingStarted} />
         <Route exact path='/Header' component={Header} />
         <Route exact path='/Welcome' component={Welcome} />
         <Route exact path='/Showcase' component={Showcase} />
         <Route exact path='/Startinganewproject' component={Startinganewproject} />
         <Route exact path='/Developerprereading' component={Developerprereading} />
         <Route exact path='/Developersetup' component={Developersetup} />
         <Route exact path='/Howtocontribute' component={Howtocontribute} />
         <Route exact path='/Adaptercodebase' component={Adaptercodebase} />
         <Route exact path='/Whoswho' component={Whoswho} />
         <Route exact path='/Slack' component={Slack} />
         
         </Switch>
    </div>
    </Router>
  );
}

export default App;
