/* eslint-disable camelcase */

export const parseToken = tokenData => {
  const { access_token, refresh_token, expires_in } = tokenData;
  const parsedData = {
    accessToken: access_token,
    expiresIn: expires_in,
  };
  // In refresh token this field is not returned from request
  if (refresh_token) parsedData.refreshToken = refresh_token;
  return parsedData;
};
