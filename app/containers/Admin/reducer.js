/*
 *
 * Admin reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, USER_DATA_RECEIVED } from './constants';

export const initialState = fromJS({
  users: null,
});

function adminReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case USER_DATA_RECEIVED:
      return state.set('users', action.data);
    default:
      return state;
  }
}

export default adminReducer;
