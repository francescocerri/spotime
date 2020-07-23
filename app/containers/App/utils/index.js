import moment from 'moment';
import { setCookie } from '../../../utils/storage';
import { COOKIE } from '../../../constants/config';
import { setInstanceKeyVal } from '../../../utils/request';

/**
 * Set cookie from token info
 * @param accessToken
 * @param refreshToken
 * @param expiresDate
 */
export const setAuthCookie = ({ accessToken, refreshToken, expiresIn }) => {
  const expireDate = moment().add(expiresIn, 'seconds').toDate();
  setCookie({ name: COOKIE.ACC_TOKEN, value: accessToken, expires: expireDate });
  setCookie({ name: COOKIE.REF_TOKEN, value: refreshToken, expires: expireDate });
  setCookie({ name: COOKIE.EXP_DATE, value: expireDate, expires: expireDate });
  setCookie({ name: COOKIE.EXP_IN, value: expiresIn, expires: expireDate });
};

/**
 * Set beare token authentication to axios instance
 * @param accessToken
 */
export const setRequestAuth = accessToken => {
  const bearerToken = `Bearer ${accessToken}`;
  setInstanceKeyVal('Authorization', bearerToken);
};
