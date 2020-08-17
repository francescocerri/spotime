import { API } from '../../constants/api';
import request from '../../utils/request';
import { parsePlaylist } from './utils';
import { DEFAULT_PAGINATION } from '../../constants/config';

export const getUserPlaylists = (customParams = {}) => {
  const params = {
    url: API.PLAYLIST.get,
    method: 'GET',
    params: {
      limit: DEFAULT_PAGINATION.BOX,
      offset: customParams.offset || 0,
    },
  };
  return request(params).then(data => parsePlaylist(data));
};
