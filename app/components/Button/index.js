/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import MaterialButton from '@material-ui/core/Button';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Button(props) {
  return (
    <MaterialButton {...props}/>
  );
}

Button.propTypes = {};

export default memo(Button);
