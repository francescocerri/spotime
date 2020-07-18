/*
 *
 * Authorization reducer
 *
 */
import produce from 'immer';
import {
  REFRESH_TOKEN_FAILED,
  REFRESH_TOKEN_REQUESTED,
  TOKEN_FAILED,
  TOKEN_REQUESTED,
  TOKEN_SUCCEEDED,
} from './constants';

export const initialState = {
  token: {
    accessToken: '',
    refreshToken: '',
    expiresIn: null,
  },
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const authorizationReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {
      case TOKEN_SUCCEEDED:
        draft.token = action.payload;
        draft.loading = false;
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

export default authorizationReducer;
