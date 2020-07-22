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
    defaultMessage: 'Errore',
    title: {
      id: `${scope}.genericError.title`,
      defaultMessage: 'Errore',
    },
    message: {
      id: `${scope}.genericError.message`,
      defaultMessage: "L'azione non può essere completata correttamente",
    },
    validation: {
      id: `${scope}.genericError.validation`,
      defaultMessage: 'Errore di validazione',
    },
    somethingWrong: {
      id: `${scope}.genericError.somethingWrong`,
      defaultMessage: 'Errore',
    },
    reloadPage: {
      id: `${scope}.genericError.reloadPage`,
      defaultMessage: 'Ricarica la pagina',
    },
    fetch: {
      id: `${scope}.genericError.fetch`,
      defaultMessage: 'Errore nella ricezione dei dati',
    },
    export: {
      id: `${scope}.genericError.export`,
      defaultMessage: "Errore nell'export dei dati",
    },
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
