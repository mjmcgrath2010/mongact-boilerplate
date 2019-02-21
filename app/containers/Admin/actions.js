/*
 *
 * Admin actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_USER_DATA,
  USER_DATA_RECEIVED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestUserData() {
  return {
    type: FETCH_USER_DATA,
  };
}

export function userDataReceived(data) {
  return {
    type: USER_DATA_RECEIVED,
    data,
  };
}
