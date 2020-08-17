import { API } from '../../constants/api';
import request from '../../utils/request';
import { parsePersonalization } from './utils';
import { DEFAULT_PAGINATION } from '../../constants/config';
import { SPOTIFY } from '../../constants/spotify';

export const getTopTracks = (params = {}) =>
  getTopPersonalization(API.PERSONALIZATION.topTracks, params);

export const getTopArtists = (params = {}) =>
  getTopPersonalization(API.PERSONALIZATION.topArtists, params);

const getTopPersonalization = (url, customParams) => {
  const params = {
    url,
    method: 'GET',
    params: {
      limit: DEFAULT_PAGINATION.BOX,
      offset: customParams.offset || 0,
      time_range: SPOTIFY.TIME_RANGE.MEDIUM,
    },
  };
  return request(params).then(data => parsePersonalization(data));
};
