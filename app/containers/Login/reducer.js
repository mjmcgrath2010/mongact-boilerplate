/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_REQUEST } from './constants';

export const initialState = fromJS({
  user: {
    username: undefined,
    token: undefined,
  },
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return state.set('user', action.user);
    case LOGOUT_REQUEST:
      return state.set('user', {});
    default:
      return state;
  }
}

export default loginReducer;
