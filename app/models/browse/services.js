import { API } from '../../constants/api';
import request from '../../utils/request';
import { SPOTIFY } from '../../constants/spotify';
import { DEFAULT_PAGINATION } from '../../constants/config';

import { parseRecommendations } from './utils';

export const getRecommendations = (customParams = {}) => {
  const params = {
    url: API.BROWSE.recommendations,
    method: 'GET',
    params: {
      limit: DEFAULT_PAGINATION.BOX,
      offset: customParams.offset || 0,
      market: SPOTIFY.MARKETS.ITALY,
      seed_genres: Object.values(SPOTIFY.GENRES).join(','),
    },
  };
  return request(params).then((data)=> parseRecommendations(data));
};
