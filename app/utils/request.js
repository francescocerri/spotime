import axios from 'axios';
import CONFIG from '../config';
import qs from 'qs';

const loginAuth = {
  Authorization: `Basic ${new Buffer(
    process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET,
  ).toString('base64')}`,
};

const instance = axios.create({
  baseURL: CONFIG.API.DOMAIN,
  paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'brackets'})
});

const instanceLogin = axios.create({
  baseURL: CONFIG.API.LOGIN_DOMAIN,
  headers: {
    ...loginAuth,
  },
});

export const setInstanceKeyVal = (key, value) => {
  instance.defaults.headers.common[key] = value;
};

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
