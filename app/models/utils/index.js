export const parsePagination = data => ({
  total: data.total,
  next: data.next,
  prev: data.previous,
  limit: data.limit,
  offset: data.offset,
});
