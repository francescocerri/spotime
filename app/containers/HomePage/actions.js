/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  RECOMMENDATIONS_FAILED,
  RECOMMENDATIONS_REQUESTED,
  RECOMMENDATIONS_SUCCEEDED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

// TOKEN ACTIONS

export function recommendationsRequested() {
  return {
    type: RECOMMENDATIONS_REQUESTED,
  };
}

export function recommendationsSucceeded(data) {
  return {
    type: RECOMMENDATIONS_SUCCEEDED,
    payload: {
      data,
    },
  };
}

export function recommendationsFailed(ex, notification) {
  return {
    type: RECOMMENDATIONS_FAILED,
    payload: {
      notification,
      ex,
    },
  };
}
