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
  UPDATE_DATA_FAILED,
  UPDATE_DATA_REQUESTED,
  UPDATE_DATA_SUCCEEDED,
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

export function updateDataRequested(key, pagination, typePagination) {
  return {
    type: UPDATE_DATA_REQUESTED,
    payload: {
      key,
      pagination,
      typePagination,
    },
  };
}

export function updateDataFailed(ex, notification) {
  return {
    type: UPDATE_DATA_FAILED,
    payload: {
      notification,
      ex,
    },
  };
}

export function updateDataSucceeded(key, newData) {
  return {
    type: UPDATE_DATA_SUCCEEDED,
    payload: {
      key,
      newData,
    },
  };
}
