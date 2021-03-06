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
  tokenError: {
    id: `${scope}.tokenError`,
    defaultMessage: "Controlla di aver inserito i dati correttamente per l'autenticazione",
  },
  refreshTokenError: {
    id: `${scope}.refreshTokenError`,
    defaultMessage: "Errore nell'aggiornanmento del token",
  },
});
