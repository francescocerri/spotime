// window.configEnvironment: Object that contains BASE_URL to configure domain externally.
export default {
  ENV: process.env.NODE_ENV,
  API: {
    DOMAIN: 'https://api.spotify.com/v1',
    LOGIN_DOMAIN: 'https://accounts.spotify.com',
  },
};
