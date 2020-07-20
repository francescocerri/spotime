import produce from 'immer';

import {
  SET_GLOBAL_MESSAGE,
  RESET_GLOBAL_MESSAGE,
  REFRESH_TOKEN_FAILED,
  REFRESH_TOKEN_REQUESTED,
  REFRESH_TOKEN_SUCCEEDED,
  TOKEN_FAILED,
  TOKEN_REQUESTED,
  TOKEN_SUCCEEDED,
} from './constants';

export const initialState = {
  notification: {},
  token: {
    accessToken: '',
    refreshToken: '',
    expiresIn: null,
  },
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_GLOBAL_MESSAGE:
        draft.notification = action.payload;
        break;
      case RESET_GLOBAL_MESSAGE:
        draft.notification = {};
        break;
      case TOKEN_SUCCEEDED:
        draft.token = action.payload.tokenData;
        draft.loading = false;
        break;
      case REFRESH_TOKEN_SUCCEEDED:
        draft.loading = false;
        draft.token = { ...state.token, ...action.payload.tokenData };
        break;
      case TOKEN_REQUESTED:
      case REFRESH_TOKEN_REQUESTED:
        draft.loading = true;
        break;
      case TOKEN_FAILED:
      case REFRESH_TOKEN_FAILED:
        draft.loading = false;
        break;
    }
  });

export default languageProviderReducer;
