/* eslint-disable camelcase */

import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { push } from 'connected-react-router';

import messages from './messages';
import { API } from '../../constants/api';
import { SPOTIFY } from '../../constants/config';
import { requestLogin } from '../../utils/request';
import log from '../../utils/logger';
import { stringify } from '../../utils/querystring';
import { paths } from '../../routes/utils/paths';
import { refreshTokenFailed, refreshTokenSucceeded, tokenFailed, tokenSucceeded, setGlobalMessage } from './actions';
import { makeSelectToken } from './selectors';
import { REFRESH_TOKEN_REQUESTED, TOKEN_REQUESTED } from './constants';

export function* handleFailedRequest(action) {
  /**
   * action.notification can be false or an object
   *
   * false means that notification have not to be present.
   * object must contains options and data for notification,
   * if omitted, there is a default notification for failed requests.
   */
  if (action.payload.notification === false) return;

  const { notification: { type = 'error', ...actionNotification } = {} } = action.payload;

  const defaultNotification = {
    type,
    message: <FormattedMessage {...messages.genericError.title} />,
  };

  yield put(
    setGlobalMessage({
      ...defaultNotification,
      ...actionNotification,
    }),
  );
}

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
    yield put(push(paths.home));
  } catch (ex) {
    log.error(ex);
    const errorNotification = {
      message: <FormattedMessage {...messages.tokenError} />,
    };
    yield put(tokenFailed(ex, errorNotification));
  }
}

export function* refreshSpotifyToken() {
  const { refreshToken } = yield select(makeSelectToken());
  try {
    const params = {
      url: API.LOGIN.TOKEN,
      method: 'POST',
      data: stringify({
        grant_type: SPOTIFY.GRANT_TYPE_REFRESH_SPOTIFY,
        refresh_token: refreshToken,
      }),
    };
    const response = yield call(requestLogin, params);
    const { access_token, expires_in } = response;
    const tokenData = {
      accessToken: access_token,
      expiresIn: expires_in,
    };
    yield put(refreshTokenSucceeded(tokenData));
  }catch (ex) {
    log.error(ex);
    const errorNotification = {
      message: <FormattedMessage {...messages.refreshTokenError} />,
    };
    yield put(refreshTokenFailed(ex, errorNotification));
  }
}

export default function* AppSaga() {
  yield takeEvery((action) => /_FAILED$/.test(action.type), handleFailedRequest);
  yield takeLatest(TOKEN_REQUESTED, getSpotifyToken);
  yield takeLatest(REFRESH_TOKEN_REQUESTED, refreshSpotifyToken);
}
