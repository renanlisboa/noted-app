import React from 'react';
import { Router, Switch } from 'react-router-dom';

import history from '../services/history';
import PersonalizedRoute from './personalizedRoute';

import Landing from '../pages/Landing';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <PersonalizedRoute path="/" component={Landing} exact />
        <PersonalizedRoute path="/signin" component={Signin} />
        <PersonalizedRoute path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default Routes;
