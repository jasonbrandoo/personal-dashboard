import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

const SidebarLink = ({ to, icon, primary, drawer }) => {
  const renderLink = linkProps => {
    return <Link to={to} {...linkProps} />;
  };
  return (
    <ListItem button component={renderLink} onClick={drawer || null}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
};

SidebarLink.defaultProps = {
  drawer: () => {},
};

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  drawer: PropTypes.func,
};

export default SidebarLink;
