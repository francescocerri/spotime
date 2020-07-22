import { call, put, takeLatest } from 'redux-saga/effects';
import { FormattedMessage } from 'react-intl';
import React from 'react';

import { RECOMMENDATIONS_REQUESTED } from './constants';
import { recommendationsFailed, recommendationsSucceeded } from './actions';
import log from '../../utils/logger';
import { getRecommendations } from '../../models/browse/services';
import appMessages from '../App/messages';

export function* getRecommendationsRequest() {
  try {
    const data = yield call(getRecommendations);
    yield put(recommendationsSucceeded(data));
  } catch (ex) {
    log.error(ex);
    const errorNotification = {
      message: <FormattedMessage {...appMessages.genericError.fetch} />,
    };
    yield put(recommendationsFailed(ex, errorNotification));
  }
}
// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(RECOMMENDATIONS_REQUESTED, getRecommendationsRequest);
}
