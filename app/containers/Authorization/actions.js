/*
 *
 * Authorization actions
 *
 */

import {
  TOKEN_FAILED,
  TOKEN_REQUESTED,
  TOKEN_SUCCEEDED,
} from './constants';

export function tokenRequested(code) {
  return {
    type: TOKEN_REQUESTED,
    payload: {
      code,
    }
  };
}

export function tokenSucceeded() {
  return {
    type: TOKEN_SUCCEEDED,
  };
}

export function tokenFailed() {
  return {
    type: TOKEN_FAILED,
  };
}
