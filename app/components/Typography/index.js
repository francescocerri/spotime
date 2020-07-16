/**
 *
 * Typography
 *
 */

import React from 'react';
import TypographyWrapper from './components/index';

export const Typography = {
  H1: props => <TypographyWrapper variant="h1" {...props} />,
  H2: props => <TypographyWrapper variant="h2" {...props} />,
  H3: props => <TypographyWrapper variant="h3" {...props} />,
  H4: props => <TypographyWrapper variant="h4" {...props} />,
  H5: props => <TypographyWrapper variant="h5" {...props} />,
  H6: props => <TypographyWrapper variant="h6" {...props} />,
};

export default TypographyWrapper;
