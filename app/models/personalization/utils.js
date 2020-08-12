import { parsePagination } from '../utils';

export const parsePersonalization = data => ({
  items: data.items,
  pagination: parsePagination(data),
});
