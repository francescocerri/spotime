import { API } from '../../constants/api';
import request from '../../utils/request';
import { parsePersonalization } from './utils';
import { DEFAULT_PAGINATION } from '../../constants/config';
import { SPOTIFY } from '../../constants/spotify';

export const getTopTracks = () =>
  getTopPersonalization(API.PERSONALIZATION.topTracks);

export const getTopArtists = () =>
  getTopPersonalization(API.PERSONALIZATION.topArtists);

const getTopPersonalization = (url) => {
  const params = {
    url,
    method: 'GET',
    params: {
      limit: DEFAULT_PAGINATION.BOX,
      time_range: SPOTIFY.TIME_RANGE.MEDIUM,
    },
  };
  return request(params).then(data => parsePersonalization(data));
};
