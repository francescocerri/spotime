import qs from 'qs';
/**
 * Get user code setting after spotify login and return it
 * @returns {string}
 */
export const getUserCodeByLocation = location => {
  const { search } = location;
  const { code } = qs.parse(search, { ignoreQueryPrefix: true });
  return code;
};
