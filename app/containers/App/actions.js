import {
  SET_GLOBAL_MESSAGE,
  RESET_GLOBAL_MESSAGE,
  REFRESH_TOKEN_FAILED,
  REFRESH_TOKEN_REQUESTED,
  REFRESH_TOKEN_SUCCEEDED,
  TOKEN_FAILED,
  TOKEN_REQUESTED,
  TOKEN_SUCCEEDED,
  SET_SPOTIFY_URI,
} from './constants';

export function setGlobalMessage(messageProps) {
  return {
    type: SET_GLOBAL_MESSAGE,
    payload: messageProps,
  };
}

export function resetGlobalMessage() {
  return {
    type: RESET_GLOBAL_MESSAGE,
  };
}

// TOKEN ACTIONS

export function tokenRequested(code) {
  return {
    type: TOKEN_REQUESTED,
    payload: {
      code,
    }
  };
}

export function tokenSucceeded(tokenData) {
  return {
    type: TOKEN_SUCCEEDED,
    payload: {
      tokenData,
    },
  };
}

export function tokenFailed(ex, notification) {
  return {
    type: TOKEN_FAILED,
    payload: {
      notification,
      ex,
    },
  };
}

export function refreshTokenRequested() {
  return {
    type: REFRESH_TOKEN_REQUESTED,
  };
}

export function refreshTokenSucceeded(tokenData) {
  return {
    type: REFRESH_TOKEN_SUCCEEDED,
    payload: {
      tokenData,
    },
  };
}

export function refreshTokenFailed(ex, notification) {
  return {
    type: REFRESH_TOKEN_FAILED,
    payload: {
      notification,
      ex,
    },
  };
}

export function setSpotifyUri(spotifyUri) {
  return {
    type: SET_SPOTIFY_URI,
    payload: {
      spotifyUri,
    },
  };
}
