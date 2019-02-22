/*
 *
 * Admin reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CLEAR_MESSAGES,
  DEFAULT_ACTION,
  POST_UPDATED,
  USER_DATA_RECEIVED,
} from './constants';

export const initialState = fromJS({
  users: null,
  posts: null,
  categories: null,
  successMessage: false,
  errorMessage: false,
});

function adminReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case USER_DATA_RECEIVED:
      return state
        .set('users', action.data.users)
        .set('posts', action.data.posts)
        .set('categories', action.data.categories);
    case POST_UPDATED:
      return state.set('successMessage', 'Post Successfully Updated');
    case CLEAR_MESSAGES:
      return state.set('successMessage', false).set('errorMessage', false);
    default:
      return state;
  }
}

export default adminReducer;
