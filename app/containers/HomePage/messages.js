/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },
  recommended: {
    id: `${scope}.recommended`,
    defaultMessage: 'Raccomandate per te',
  },
  topTracks: {
    id: `${scope}.recommended`,
    defaultMessage: 'Brani più ascoltati recentemente',
  },
  topArtists: {
    id: `${scope}.recommended`,
    defaultMessage: 'Artisti preferiti',
  },
});
