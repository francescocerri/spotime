import { takeEvery, takeLatest, call, put, select } from 'redux-saga/effects';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { setGlobalMessage } from './actions';

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

  yield put(setGlobalMessage({
    ...defaultNotification,
    ...actionNotification,
  }));
}

export default function* AppSaga() {
  yield takeEvery((action) => /_FAILED$/.test(action.type), handleFailedRequest);
}
