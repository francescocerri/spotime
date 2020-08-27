/**
 *
 * Loader
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './components/styled';
import { CircularProgress } from '@material-ui/core';

function Loader(props) {
  const { color } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress color={color} />
    </div>
  );
}

Loader.propTypes = {
  color: PropTypes.string,
};

export default memo(Loader);
