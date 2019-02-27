import {
  takeEvery,
  call,
  put,
  select,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { push } from 'connected-react-router/immutable';
import makeSelectLogin from '../Login/selectors';
import {
  FETCH_USER_DATA,
  CREATE_POST,
  POST_CREATED,
  UPDATE_POST,
  DELETE_POST,
  CREATE_USER,
  POST_DELETED,
  DELETE_USER,
} from './constants';
import {
  userDataReceived,
  newPostCreated,
  postUpdated,
  postDeleted,
  userCreated,
  userDeleted,
} from './actions';
import Api from '../../api';

export function* fetchUserData() {
  const auth = yield select(makeSelectLogin());
  let data = {};

  if (auth.user.admin) {
    const [users, posts, categories] = yield all([
      call(Api.get, '/user'),
      call(Api.get, '/post'),
      call(Api.get, '/category'),
    ]);
    data = {
      users,
      posts,
      categories,
    };
  } else {
    const [posts, categories] = yield all([
      call(Api.get, '/post'),
      call(Api.get, '/category'),
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
  const [newPost] = yield all([call(Api.post, '/post', action.payload)]);
  try {
    yield put(newPostCreated(newPost));
  } catch (e) {
    console.error(e);
  }
}

export function* fetchPostData() {
  const posts = yield call(Api.get, '/post');
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
  const updatedPost = yield call(Api.update, `/post/${id}`, {
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
  const deletedPost = yield call(Api.delete, `/post/${id}`);
  try {
    yield all([
      put(postDeleted(deletedPost)),
      put({ type: FETCH_USER_DATA }),
      put(push('/app/posts')),
    ]);
  } catch (e) {
    console.error(e);
  }
}

export function* createUser(action) {
  const { username, password, admin } = action.payload;
  const user = yield call(Api.post, '/user', {
    username,
    password,
    admin,
  });

  try {
    yield put(userCreated(user));
  } catch (e) {
    console.error(e);
  }
}

export function* deleteUser(action) {
  const { id } = action;
  const deletedUser = yield call(Api.delete, `/user/${id}`);

  try {
    yield put(userDeleted(deletedUser));
  } catch (e) {
    console.error(e);
  }
}

// Individual exports for testing
export default function* adminSaga() {
  // See example in containers/HomePage/saga.js
  yield all([
    takeEvery(FETCH_USER_DATA, fetchUserData),
    takeEvery(CREATE_POST, createPost),
    takeEvery(POST_CREATED, fetchPostData),
    takeEvery(POST_DELETED, fetchPostData),
    takeEvery(UPDATE_POST, updatePost),
    takeEvery(DELETE_POST, deletePost),
    takeLatest(CREATE_USER, createUser),
    takeLatest(DELETE_USER, deleteUser),
  ]);
}
