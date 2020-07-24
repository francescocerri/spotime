export const SPOTIFY = {
  GRANT_TYPE_SPOTIFY: 'authorization_code',
  GRANT_TYPE_REFRESH_SPOTIFY: 'refresh_token',
  REDIRECT_URL: `${window.location.origin}/auth`,
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
  TIME_RANGE: {
    MEDIUM: 'medium_term',
  },
};
