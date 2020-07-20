import axios from 'axios';
import CONFIG from '../config';

const headers = {
  Authorization: `Basic ${new Buffer(
    process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET,
  ).toString('base64')}`,
};
const instance = axios.create({
  baseURL: CONFIG.API.DOMAIN,
  headers: {
    ...headers,
  },
});
const instanceLogin = axios.create({
  baseURL: CONFIG.API.LOGIN_DOMAIN,
  headers: {
    ...headers,
  },
});

/**
 * @param  {object} config - The configuration we want to pass to the request
 *
 * @returns {object} - The response data
 */
export default function request(config) {
  return instance(config)
    .then((response) => response.data);
}

export function requestLogin(config) {
  return instanceLogin(config)
    .then((response) => response.data);
}
