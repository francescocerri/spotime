/*
 * Authorization Messages
 *
 * This contains all the text for the Authorization container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Authorization';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Authorization container!',
  },
});
