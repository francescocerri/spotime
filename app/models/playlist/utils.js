import { parsePagination } from '../utils';

export const parsePlaylist = data => ({
  items: data.items,
  pagination: parsePagination(data),
});
