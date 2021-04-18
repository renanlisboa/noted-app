import React from 'react';
import { Router, Switch } from 'react-router-dom';

import history from '../services/history';
import PersonalizedRoute from './personalizedRoute';

import Landing from '../pages/Landing';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <PersonalizedRoute path="/" component={Landing} exact />
        <PersonalizedRoute path="/signin" component={Signin} />
        <PersonalizedRoute path="/signup" component={Signup} />
        <PersonalizedRoute path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
    </Router>
  );
}

export default Routes;
