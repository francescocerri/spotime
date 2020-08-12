import { parsePagination } from '../utils';

export const parseTrackLibrary = data => ({
  items: data.items.map(item => item.track),
  pagination: parsePagination(data),
});
export const parseAlbumLibrary = data => ({
  items: data.items.map(item => item.album),
  pagination: parsePagination(data),
});
