import { takeEvery, call, put, select, all } from 'redux-saga/effects';
import { push } from 'connected-react-router/immutable';
import request from '../../utils/request';
import makeSelectLogin from '../Login/selectors';
import {
  FETCH_USER_DATA,
  CREATE_POST_REQUEST,
  POST_CREATED,
  UPDATE_POST,
  DELETE_POST,
} from './constants';
import {
  userDataReceived,
  newPostCreated,
  postUpdated,
  postDeleted,
} from './actions';

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

export function* update(url, body) {
  const auth = yield select(makeSelectLogin());
  return yield call(request, url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      access_token: auth.user.token,
      'Content-Type': 'application/json',
    },
  });
}

export function* remove(url) {
  const auth = yield select(makeSelectLogin());
  return yield call(request, url, {
    method: 'DELETE',
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
    const [users, posts, categories] = yield all([
      call(get, '/api/endpoints/user'),
      call(get, '/api/endpoints/post'),
      call(get, '/api/endpoints/category'),
    ]);
    data = {
      users,
      posts,
      categories,
    };
  } else {
    const [posts, categories] = yield all([
      call(get, '/api/endpoints/post'),
      call(get, '/api/endpoints/category'),
    ]);
    data = {
      posts,
      categories,
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

export function* updatePost(action) {
  const { id, title, content } = action.payload;
  const updatedPost = yield call(update, `/api/endpoints/post/${id}`, {
    title,
    content,
  });
  try {
    yield put(postUpdated(updatedPost));
  } catch (e) {
    console.error(e);
  }
}

export function* deletePost(action) {
  const { id } = action;
  const deletedPost = yield call(remove, `/api/endpoints/post/${id}`);
  try {
    yield all([
      put(postDeleted(deletedPost)),
      put({ type: FETCH_USER_DATA }),
      put(push('/admin/posts')),
    ]);
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
    takeEvery(UPDATE_POST, updatePost),
    takeEvery(DELETE_POST, deletePost),
  ]);
}
