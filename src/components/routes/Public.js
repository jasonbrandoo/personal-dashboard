import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Public = ({ component: Component, ...rest }) =>
  console.log({ Component, rest }) || (
    <Route {...rest} render={props => <Component {...props} />} />
  );

Public.propTypes = {
  component: PropTypes.func.isRequired,
};

export default Public;
