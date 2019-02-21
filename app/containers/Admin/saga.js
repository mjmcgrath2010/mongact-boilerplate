import { takeEvery, call, put, select, all } from 'redux-saga/effects';
import request from '../../utils/request';
import makeSelectLogin from '../Login/selectors';
import {
  FETCH_USER_DATA,
  CREATE_POST_REQUEST,
  POST_CREATED,
} from './constants';
import { userDataReceived, newPostCreated } from './actions';

export function* get(url) {
  const auth = yield select(makeSelectLogin());
  return yield call(request, url, {
    headers: {
      access_token: auth.user.token,
    },
  });
}

export function* post(url, body) {
  const auth = yield select(makeSelectLogin());
  return yield call(request, url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      access_token: auth.user.token,
      'Content-Type': 'application/json',
    },
  });
}

export function* fetchUserData() {
  const auth = yield select(makeSelectLogin());
  let data = {};
  if (auth.user.admin) {
    const [users, posts] = yield all([
      call(get, '/api/endpoints/user'),
      call(get, '/api/endpoints/post'),
    ]);
    data = {
      users,
      posts,
    };
  } else {
    const [posts] = yield all([
      call(get, '/api/endpoints/user'),
      call(get, '/api/endpoints/post'),
    ]);
    data = {
      posts,
    };
  }

  try {
    yield put(userDataReceived(data));
  } catch (e) {
    console.error(e);
  }
}

export function* createPost(action) {
  const [newPost] = yield all([
    call(post, '/api/endpoints/post', action.payload),
  ]);
  try {
    yield put(newPostCreated(newPost));
  } catch (e) {
    console.error(e);
  }
}

export function* fetchPostData() {
  const posts = yield call(get, '/api/endpoints/post');
  const data = {
    posts,
  };

  try {
    yield put(userDataReceived(data));
  } catch (e) {
    console.error(e);
  }
}

// Individual exports for testing
export default function* adminSaga() {
  // See example in containers/HomePage/saga.js
  yield all([
    takeEvery(FETCH_USER_DATA, fetchUserData),
    takeEvery(CREATE_POST_REQUEST, createPost),
    takeEvery(POST_CREATED, fetchPostData),
  ]);
}
