import { DEFAULT_PAGINATION, PAGINATION_KEY } from '../../../constants/config';
import { API_TYPE } from '../../../constants/spotify';
import { getRecommendations } from '../../../models/browse/services';
import { getUserPlaylists } from '../../../models/playlist/services';
import { getSavedAlbums, getSavedTracks } from '../../../models/library/services';
import {
  getTopArtists,
  getTopTracks,
} from '../../../models/personalization/services';

export const getCurrentPagination = (pagination, type) => {
  let { offset = 0 } = pagination;
  offset =
    type === PAGINATION_KEY.NEXT
      ? offset + DEFAULT_PAGINATION.BOX
      : offset - DEFAULT_PAGINATION.BOX;
  return { offset };
};

export const getCurrentServices = key => {
  switch (key) {
    case API_TYPE.SAVED_TRACKS:
      return getSavedTracks;
    case API_TYPE.SAVED_ALBUMS:
      return getSavedAlbums;
    case API_TYPE.TOP_TRACKS:
      return getTopTracks;
    case API_TYPE.TOP_ARTISTS:
      return getTopArtists;
    case API_TYPE.PLAYLIST:
      return getUserPlaylists;
    case API_TYPE.RECOMMENDATIONS:
      return getRecommendations;
    default:
      return () => {};
  }
};
