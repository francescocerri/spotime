/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { useStyles } from './components/styled';

function Header() {
  const classes = useStyles();
  return (
    <Grid className={classes.headerContainer}>
    </Grid>
  );
}

Header.propTypes = {};

export default memo(Header);
