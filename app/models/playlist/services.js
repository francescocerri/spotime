import { API } from '../../constants/api';
import request from '../../utils/request';
import { parsePlaylist } from './utils';
import { DEFAULT_PAGINATION } from '../../constants/config';

export const getUserPlaylists = () => {
  const params = {
    url: API.PLAYLIST.get,
    method: 'GET',
    params: {
      limit: DEFAULT_PAGINATION.BOX,
    },
  };
  return request(params).then(data => parsePlaylist(data));
};
