import {
  SET_AUTH_TOKEN,
  SPOTIFY_LOGIN_FAILED,
  SPOTIFY_LOGIN_REQUESTED,
  SPOTIFY_LOGIN_SUCCEEDED,
} from './constants';

export function setAuthToken() {
  return {
    type: SET_AUTH_TOKEN,
  };
}

export function spotifyLoginRequested() {
  return {
    type: SPOTIFY_LOGIN_REQUESTED,
  };
}

export function spotifyLoginSucceeded() {
  return {
    type: SPOTIFY_LOGIN_SUCCEEDED,
  };
}
export function spotifyLoginFailed() {
  return {
    type: SPOTIFY_LOGIN_FAILED,
  };
}
