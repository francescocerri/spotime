/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  HOMEPAGE_INFO_REQUESTED,
  HOMEPAGE_INFO_SUCCEEDED,
  HOMEPAGE_INFO_FAILED
} from './constants';

export const initialState = {
  loading: false,
  data: {
    recommendations: [],
    playlists: [],
    savedAlbums: [],
    savedTracks: [],
    topArtists: [],
    topTracks: [],
  },
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case HOMEPAGE_INFO_REQUESTED:
        draft.loading = true;
        break;
      case HOMEPAGE_INFO_SUCCEEDED:
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      case HOMEPAGE_INFO_FAILED:
        draft.loading = false;
        break;
    }
  });

export default homePageReducer;
