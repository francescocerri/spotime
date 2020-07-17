import axios from 'axios';
import CONFIG from '../config';

const instance = axios.create({
  baseURL: CONFIG.API.DOMAIN,
});
const instanceLogin = axios.create({
  baseURL: CONFIG.API.LOGIN_DOMAIN,
});

axios.defaults.headers.common['Content-type'] = 'application/json';


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
