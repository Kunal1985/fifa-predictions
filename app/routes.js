import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Register1 from './components/Register1';
import Register2 from './components/Register2';
import Register3 from './components/Register3';
import Register4 from './components/Register4';
import Register5 from './components/Register5';
import Register6 from './components/Register6';
import Register7 from './components/Register7';
import Register8 from './components/Register8';
import RouteNotFound from './components/RouteNotFound';
import Summary from './components/Summary';
import Login from './components/Login';

export default (
  <Route component={App}>
    <Route path='/' component={Login} />
    <Route path='/home' component={Summary} />
    <Route path='/register1' component={Register1}/>
    <Route path='/register2' component={Register2} />
    <Route path='/register3' component={Register3} />
    <Route path='/register4' component={Register4} />
    <Route path='/register5' component={Register5} />
    <Route path='/register6' component={Register6} />
    <Route path='/register7' component={Register7} />
    <Route path='/register8' component={Register8} />
    <Route path="*" component={RouteNotFound}/>
  </Route>
);
