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
    defaultMessage: 'Raccomandati per te',
  },
  topTracks: {
    id: `${scope}.topTracks`,
    defaultMessage: 'Brani più ascoltati recentemente',
  },
  topArtists: {
    id: `${scope}.topArtists`,
    defaultMessage: 'Artisti preferiti',
  },
  savedTracks: {
    id: `${scope}.savedTracks`,
    defaultMessage: 'Brani salvati',
  },
  savedAlbums: {
    id: `${scope}.savedAlbums`,
    defaultMessage: 'Album salvati',
  },
  yourPlaylist: {
    id: `${scope}.yourPlaylist`,
    defaultMessage: 'Le tue Playlist',
  },
});
