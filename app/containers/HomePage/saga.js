import { call, put, takeLatest, all } from 'redux-saga/effects';
import { FormattedMessage } from 'react-intl';
import React from 'react';

import { HOMEPAGE_INFO_REQUESTED } from './constants';
import log from '../../utils/logger';
import { homepageInfoFailed, homepageInfoSucceeded } from './actions';
import { getRecommendations } from '../../models/browse/services';
import { getUserPlaylists } from '../../models/playlist/services';
import { getSavedAlbums, getSavedTracks } from '../../models/library/services';
import {
  getTopArtists,
  getTopTracks,
} from '../../models/personalization/services';
import appMessages from '../App/messages';

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
// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(HOMEPAGE_INFO_REQUESTED, getHomepageInfo);
}
