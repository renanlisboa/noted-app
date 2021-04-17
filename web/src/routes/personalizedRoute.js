import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function PersonalizedRoute({ component: Component, isPrivate, ...rest }) {
  // const { signed } = store.getState().auth;
  const signed = false;

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
  isPrivate: PropTypes.bool.isRequired,
};

export default PersonalizedRoute;
