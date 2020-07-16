/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Typography } from '../../components/Typography';
import messages from './messages';
const { H3 } = Typography;
export default function HomePage() {
  return (
    <H3>
      <FormattedMessage {...messages.header} />
    </H3>
  );
}
