/**
 *
 * Typography
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TypographyMui from '@material-ui/core/Typography';

function Typography(props) {
  const {
    variant,
    color = 'textPrimary',
    children,
    align,
  } = props;
  "".map(()=>{})
  return (
    <TypographyMui
      variant={variant}
      color={color}
      align={align}
    >
      {children}
    </TypographyMui>
  );
}

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit',
  ]),
  color: PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error',
  ]),
  align: PropTypes.oneOf([
    'inherit',
    'left',
    'center',
    'right',
    'justify',
  ]),
  children: PropTypes.node,
};

export default memo(Typography);
