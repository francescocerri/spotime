export const SPOTIFY = {
  GRANT_TYPE_SPOTIFY: 'authorization_code',
  GRANT_TYPE_REFRESH_SPOTIFY: 'refresh_token',
  REDIRECT_URL: 'http://localhost:3000/auth',
  SCOPE: [
    'user-read-playback-state',
    'user-read-email',
    'user-read-private',
    'user-top-read',
    'playlist-read-private',
    'user-read-recently-played',
    'user-library-read',
  ],
  MARKETS: {
    ITALY: 'it',
  },
  GENRES: {
    ROCK: 'rock',
    POP: 'pop',
    DANCE: 'dance',
    HIP_HOP: 'hip-hop',
  },
};
