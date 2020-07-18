/* eslint-disable camelcase */

import { takeLatest, call, put } from 'redux-saga/effects';
import { stringify } from 'utils/querystring';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { TOKEN_REQUESTED, REFRESH_TOKEN_REQUESTED } from './constants';
import { tokenSucceeded, tokenFailed } from './actions';
import messages from './messages';
import { requestLogin } from '../../utils/request';
import log from '../../utils/logger';
import { SPOTIFY } from '../../constants/config';
import { API } from '../../constants/api';
import { Snackbar } from '@material-ui/core';

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

    const response = yield call(requestLogin, params);
    const { access_token, refresh_token, expires_in } = response;

    const tokenData = {
      accessToken: access_token,
      refreshToken: refresh_token,
      expiresIn: expires_in,
    };
    yield put(tokenSucceeded(tokenData));
  } catch (ex) {
    log.error(ex);
    const errorNotification = {
      message: <FormattedMessage {...messages.tokenError} />,
    };
    yield put(tokenFailed(ex, errorNotification));
  }
}

export function* refreshSpotifyToken() {

}


export default function* authorizationSaga() {
  yield takeLatest(TOKEN_REQUESTED, getSpotifyToken);
  yield takeLatest(REFRESH_TOKEN_REQUESTED, refreshSpotifyToken);
}
