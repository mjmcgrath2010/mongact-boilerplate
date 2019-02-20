/*
 *
 * Login actions
 *
 */

import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_SUCCESS } from './constants';

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    user: data,
  };
}

export function handleLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function handleLogout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}
