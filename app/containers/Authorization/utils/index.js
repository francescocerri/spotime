/**
 * Get user code setting after spotify login and return it
 * @returns {string}
 */
export const getUserCodeByLocation = () => {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  return params.get('code');
};
