import { API } from '../../constants/api';
import request from '../../utils/request';
import { parseTrackLibrary, parseAlbumLibrary } from './utils';
import { DEFAULT_PAGINATION } from '../../constants/config';
import { SPOTIFY } from '../../constants/spotify';

export const getSavedAlbums = (customParams = {}) => {
  const params = {
    url: API.LIBRARY.savedAlbums,
    method: 'GET',
    params: {
      limit: DEFAULT_PAGINATION.BOX,
      offset: customParams.offset || 0,
      markets: SPOTIFY.MARKETS.ITALY,
    },
  };
  return request(params).then(data => parseAlbumLibrary(data));
};

export const getSavedTracks = (customParams = {}) => {
  const params = {
    url: API.LIBRARY.savedTracks,
    method: 'GET',
    params: {
      limit: DEFAULT_PAGINATION.BOX,
      offset: customParams.offset || 0,
      markets: SPOTIFY.MARKETS.ITALY,
    },
  };
  return request(params).then(data => parseTrackLibrary(data));
};
