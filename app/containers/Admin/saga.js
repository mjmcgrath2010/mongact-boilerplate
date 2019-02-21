import { takeEvery, call, put, select, all } from 'redux-saga/effects';
import request from '../../utils/request';
import makeSelectLogin from '../Login/selectors';
import { FETCH_USER_DATA } from './constants';
import { userDataReceived } from './actions';

export function* get(url) {
  const auth = yield select(makeSelectLogin());
  return yield call(request, url, {
    headers: {
      access_token: auth.user.token,
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

// Individual exports for testing
export default function* adminSaga() {
  // See example in containers/HomePage/saga.js
  yield all([takeEvery(FETCH_USER_DATA, fetchUserData)]);
}
