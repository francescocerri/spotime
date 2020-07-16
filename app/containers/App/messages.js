/*
 * ErrorBoundary Messages
 *
 * This contains all the text for the ErrorBoundary component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.App';

export default defineMessages({
  genericError: {
    id: `${scope}.genericError`,
    defaultMessage: 'Error',
    title: {
      id: `${scope}.genericError.title`,
      defaultMessage: 'Error',
    },
    message: {
      id: `${scope}.genericError.message`,
      defaultMessage: 'The action could not be completed successfully',
    },
    validation: {
      id: `${scope}.genericError.validation`,
      defaultMessage: 'Validation error',
    },
    somethingWrong: {
      id: `${scope}.genericError.somethingWrong`,
      defaultMessage: 'Something wrong',
    },
    reloadPage: {
      id: `${scope}.genericError.reloadPage`,
      defaultMessage: 'Please reload the page',
    },
    fetch: {
      id: `${scope}.genericError.fetch`,
      defaultMessage: 'Error retrieving data',
    },
    export: {
      id: `${scope}.genericError.export`,
      defaultMessage: 'Error exporting data',
    },
  },
});
