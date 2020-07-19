/**
 *
 * Loader
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

function Loader(props) {
  const { color } = props;
  return <CircularProgress color={color} />;
}

Loader.propTypes = {
  color: PropTypes.string,
};

export default memo(Loader);
