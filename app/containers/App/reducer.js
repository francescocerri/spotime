import produce from 'immer';

import { SET_AUTH_TOKEN } from './constants';
import { getCookie } from '../../utils/storage';
import { COOKIE_NAME } from '../../constants/config';

export const initialState = {
  authToken: getCookie(COOKIE_NAME) || null,
};

/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_AUTH_TOKEN:
        draft.authToken = action.payload.authToken;
        break;
    }
  });

export default languageProviderReducer;
