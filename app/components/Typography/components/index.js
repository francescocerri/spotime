/**
 *
 * Typography
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TypographyMui from '@material-ui/core/Typography';
import { useStyles } from './styled';

function Typography(props) {
  const defaultTypo = 'textPrimary';
  const {
    variant,
    color = defaultTypo,
    customColor,
    children,
    align,
  } = props;
  const classes = useStyles(props);
  const typographyColor = customColor ? defaultTypo : color;
  return (
    <TypographyMui
      variant={variant}
      color={typographyColor}
      align={align}
      className={classes.typography}
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
  customColor: PropTypes.oneOf([
    'primaryPaper',
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
