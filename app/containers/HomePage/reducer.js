/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  RECOMMENDATIONS_FAILED,
  RECOMMENDATIONS_REQUESTED,
  RECOMMENDATIONS_SUCCEEDED,
} from './constants';

export const initialState = {
  loading: false,
  recommendations: [],
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case RECOMMENDATIONS_REQUESTED:
        draft.loading = true;
        break;
      case RECOMMENDATIONS_SUCCEEDED:
        draft.loading = false;
        draft.recommendations = action.payload.data;
        break;
      case RECOMMENDATIONS_FAILED:
        draft.loading = false;
        break;
    }
  });

export default homePageReducer;
