/* eslint-disable camelcase */

import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { push } from 'connected-react-router';

import messages from './messages';
import log from '../../utils/logger';
import { paths } from '../../routes/utils/paths';
import {
  refreshTokenFailed,
  refreshTokenSucceeded,
  tokenFailed,
  tokenSucceeded,
  setGlobalMessage,
} from './actions';
import { makeSelectToken } from './selectors';
import { REFRESH_TOKEN_REQUESTED, TOKEN_REQUESTED } from './constants';
import {
  getToken,
  refreshTokenRequest,
} from '../../models/authorization/services';

export function* handleFailedRequest(action) {
  /**
   * action.notification can be false or an object
   *
   * false means that notification have not to be present.
   * object must contains options and data for notification,
   * if omitted, there is a default notification for failed requests.
   */
  if (action.payload.notification === false) return;

  const {
    notification: { type = 'error', ...actionNotification } = {},
  } = action.payload;

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
    const tokenData = yield call(getToken, code);
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
    const tokenData = refreshTokenRequest(refreshToken);
    yield put(refreshTokenSucceeded(tokenData));
  } catch (ex) {
    log.error(ex);
    const errorNotification = {
      message: <FormattedMessage {...messages.refreshTokenError} />,
    };
    yield put(refreshTokenFailed(ex, errorNotification));
  }
}

export default function* AppSaga() {
  yield takeEvery(action => /_FAILED$/.test(action.type), handleFailedRequest);
  yield takeLatest(TOKEN_REQUESTED, getSpotifyToken);
  yield takeLatest(REFRESH_TOKEN_REQUESTED, refreshSpotifyToken);
}
