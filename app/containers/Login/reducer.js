/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { LOGIN_REDIRECT, LOGIN_REQUEST } from './constants';

export const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_REDIRECT:
      return state.set('location', action.url).set('isAuthed', action.isAuthed);
    default:
      return state;
  }
}

export default loginReducer;
