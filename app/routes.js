import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Predictions from './components/Predictions';
import Results from './components/Results';
import MyAccount from './components/MyAccount';
import Rules from './components/Rules';
import RouteNotFound from './components/RouteNotFound';
import Login from './components/Login';
import { AdminRoute, User1Route, User12Route, User3Route } from './auth-route-handle';

export default (
<Route component={ App }>
  <Route path='/' component={ Login } />
  <Route path='/myaccount' component={ AdminRoute(MyAccount) } />
  <Route path='/predictions' component={ AdminRoute(Predictions) } />
  <Route path='/results' component={ AdminRoute(Results) } />
  <Route path='/Rules' component={ AdminRoute(Rules) } />
  <Route path="*" component={ RouteNotFound } />
</Route>
);
