import produce from 'immer';

import { SET_GLOBAL_MESSAGE, RESET_GLOBAL_MESSAGE } from './constants';

export const initialState = {
  notification: {},
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
    }
  });

export default languageProviderReducer;
