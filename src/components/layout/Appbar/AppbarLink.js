import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const style = () => ({
  left: {
    flexGrow: 1,
  },
});

const AppbarLink = ({ classes }) => (
  <React.Fragment>
    <Button
      to="/"
      component={RouterLink}
      color="inherit"
      variant="text"
      className={classes.left}
    >
      Protected-Route
    </Button>
    <Button to="/login" component={RouterLink} color="inherit" variant="text">
      Login
    </Button>
    <Button
      to="/register"
      component={RouterLink}
      color="inherit"
      variant="text"
    >
      Register
    </Button>
  </React.Fragment>
);

AppbarLink.propTypes = {
  classes: PropTypes.shape({
    left: PropTypes.string,
  }).isRequired,
};

export default withStyles(style)(AppbarLink);
