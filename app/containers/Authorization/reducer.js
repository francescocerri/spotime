/*
 *
 * Authorization reducer
 *
 */
import produce from 'immer';
import {} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const authorizationReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {
    }
  });

export default authorizationReducer;
