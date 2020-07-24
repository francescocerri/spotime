/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  HOMEPAGE_INFO_REQUESTED,
  HOMEPAGE_INFO_FAILED,
  HOMEPAGE_INFO_SUCCEEDED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function homepageInfoSucceeded(data) {
  return {
    type: HOMEPAGE_INFO_SUCCEEDED,
    payload: {
      data,
    },
  };
}

export function homepageInfoFailed(ex, notification) {
  return {
    type: HOMEPAGE_INFO_FAILED,
    payload: {
      notification,
      ex,
    },
  };
}

export function homepageInfoRequested() {
  return {
    type: HOMEPAGE_INFO_REQUESTED,
  };
}
