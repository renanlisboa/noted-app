import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { store } from '../store';

function PersonalizedRoute({ component: Component, isPrivate, ...rest }) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/signin" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}

PersonalizedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isPrivate: PropTypes.bool,
};

export default PersonalizedRoute;
