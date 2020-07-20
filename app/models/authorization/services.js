import { API } from '../../constants/api';
import { stringify } from '../../utils/querystring';
import { requestLogin } from '../../utils/request';
import { parseToken } from './utils';
import { SPOTIFY } from '../../constants/config';

export const getToken = code => {
  const params = {
    url: API.LOGIN.TOKEN,
    method: 'POST',
    data: stringify({
      code,
      redirect_uri: SPOTIFY.REDIRECT_URL,
      grant_type: SPOTIFY.GRANT_TYPE_SPOTIFY,
    }),
  };
  return requestLogin(params).then(response => parseToken(response));
};

export const refreshTokenRequest = refreshTokenData => {
  const params = {
    url: API.LOGIN.TOKEN,
    method: 'POST',
    data: stringify({
      grant_type: SPOTIFY.GRANT_TYPE_REFRESH_SPOTIFY,
      refresh_token: refreshTokenData,
    }),
  };
  return requestLogin(params).then(response => parseToken(response));
};
