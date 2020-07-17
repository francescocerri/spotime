import { takeLatest, call } from 'redux-saga/effects';
import { stringify } from 'utils/querystring';

import { TOKEN_REQUESTED } from './constants';
import { requestLogin } from '../../utils/request';
import { SPOTIFY } from '../../constants/config';
import { API } from '../../constants/api';

export function* getSpotifyToken({ payload: { code } }) {
  try {
    const clientSecret = process.env.CLIENT_SECRET;
    const clientId = process.env.CLIENT_ID;
    const params = {
      url: API.LOGIN.TOKEN,
      method: 'POST',
      data: stringify({
        code,
        redirect_uri: SPOTIFY.REDIRECT_URL,
        grant_type: SPOTIFY.GRANT_TYPE_SPOTIFY,
        client_id: clientId,
        client_secret: clientSecret,
      }),
    };

    yield call(requestLogin, params);
  } catch (ex) {

  }
}

export default function* authorizationSaga() {
  yield takeLatest(TOKEN_REQUESTED, getSpotifyToken);
}
