/*
 *
 * Login actions
 *
 */

import { LOGIN_REQUEST, LOGIN_REDIRECT } from './constants';

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    user: data,
  };
}

export function loginRedirect(url) {
  const pathArry = url.split('/');
  const path = url.replace(`${pathArry[0]}//${pathArry[2]}`, '');
  const isAuthed = pathArry[3] === 'admin';
  return {
    type: LOGIN_REDIRECT,
    url: path,
    isAuthed,
  };
}
