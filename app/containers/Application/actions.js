/*
 *
 * Application actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_USER_DATA,
  USER_DATA_RECEIVED,
  CREATE_POST,
  POST_CREATED,
  UPDATE_POST,
  DELETE_POST,
  POST_UPDATED,
  POST_DELETED,
  CLEAR_MESSAGES,
  CREATE_USER,
  USER_CREATED,
  UPDATE_USER,
  DELETE_USER,
  USER_DELETED,
  USER_UPDATED,
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

export function createUser(payload) {
  return {
    type: CREATE_USER,
    payload,
  };
}

export function userCreated(payload) {
  return {
    type: USER_CREATED,
    payload,
  };
}

export function updateUser(payload) {
  return {
    type: UPDATE_USER,
    payload,
  };
}

export function userUpdated(payload) {
  return {
    type: USER_UPDATED,
    payload,
  };
}

export function deleteUser(id) {
  return {
    type: DELETE_USER,
    id,
  };
}

export function userDeleted(payload) {
  return {
    type: USER_DELETED,
    payload,
  };
}

export function createPost(payload) {
  return {
    type: CREATE_POST,
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
