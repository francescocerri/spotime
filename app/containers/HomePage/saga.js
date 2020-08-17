import { call, put, takeLatest, all } from 'redux-saga/effects';
import { FormattedMessage } from 'react-intl';
import React from 'react';

import { HOMEPAGE_INFO_REQUESTED, UPDATE_DATA_REQUESTED } from './constants';
import log from '../../utils/logger';
import { homepageInfoFailed, homepageInfoSucceeded, updateDataFailed, updateDataSucceeded } from './actions';
import { getCurrentPagination, getCurrentServices } from './utils';
import { getRecommendations } from '../../models/browse/services';
import { getUserPlaylists } from '../../models/playlist/services';
import { getSavedAlbums, getSavedTracks } from '../../models/library/services';
import {
  getTopArtists,
  getTopTracks,
} from '../../models/personalization/services';
import appMessages from '../App/messages';

/**
 * Get all homepage data by services
 */
export function* getHomepageInfo() {
  try {
    const [
      recommendations,
      playlists,
      savedAlbums,
      savedTracks,
      topArtists,
      topTracks,
    ] = yield all([
      call(getRecommendations),
      call(getUserPlaylists),
      call(getSavedAlbums),
      call(getSavedTracks),
      call(getTopArtists),
      call(getTopTracks),
    ]);

    yield put(
      homepageInfoSucceeded({
        recommendations,
        playlists,
        savedAlbums,
        savedTracks,
        topArtists,
        topTracks,
      }),
    );
  } catch (ex) {
    log.error(ex);
    const errorNotification = {
      message: <FormattedMessage {...appMessages.genericError.fetch} />,
    };
    yield put(homepageInfoFailed(ex, errorNotification));
  }
}

/**
 * Update data for single box with different pagination
 * @param payload
 */
export function* getSingleData({ payload }) {
  try {
    const { key, pagination, typePagination } = payload;
    const { offset } = getCurrentPagination(pagination, typePagination);
    const services = getCurrentServices(key);
    const response = yield call(services, { offset });
    yield put(updateDataSucceeded(key, response));
  }catch (ex) {
    log.error(ex);
    const errorNotification = {
      message: <FormattedMessage {...appMessages.genericError.fetch} />,
    };
    yield put(updateDataFailed(ex, errorNotification));
  }
}
// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(HOMEPAGE_INFO_REQUESTED, getHomepageInfo);
  yield takeLatest(UPDATE_DATA_REQUESTED, getSingleData);
}
