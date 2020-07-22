/**
 *
 * Boxs
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Boxs() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Boxs.propTypes = {};

export default memo(Boxs);
