/*
 *
 * Admin actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_USER_DATA,
  USER_DATA_RECEIVED,
  CREATE_POST_REQUEST,
  POST_CREATED,
  UPDATE_POST,
  DELETE_POST,
  POST_UPDATED,
  POST_DELETED,
  CLEAR_MESSAGES,
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

export function createPost(payload) {
  return {
    type: CREATE_POST_REQUEST,
    payload,
  };
}

export function updatePost(payload) {
  return {
    type: UPDATE_POST,
    payload,
  };
}

export function postUpdated(payload) {
  return {
    type: POST_UPDATED,
    payload,
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id,
  };
}

export function postDeleted(payload) {
  return {
    type: POST_DELETED,
    payload,
  };
}

export function newPostCreated(payload) {
  return {
    type: POST_CREATED,
    payload,
  };
}

export function clearMessages() {
  return {
    type: CLEAR_MESSAGES,
  };
}
