/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'spotime.containers.routes';

export default defineMessages({
  homepage: {
    id: `${scope}.homepage`,
    defaultMessage: 'Homepage',
  },
  notFound: {
    id: `${scope}.notFound`,
    defaultMessage: '404',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  auth: {
    id: `${scope}.auth`,
    defaultMessage: 'Auth',
  }
});
