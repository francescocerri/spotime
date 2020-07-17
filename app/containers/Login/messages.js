/*
 * Login Messages
 *
 * This contains all the text for the Login container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Login';

export default defineMessages({
  loginInfo: {
    id: `${scope}.loginInfo`,
    defaultMessage: 'Per poter accedere devi autenticarti su Spotify',
  },
  login: {
    id: `${scope}.loginInfo`,
    defaultMessage: 'Login',
  },
});
