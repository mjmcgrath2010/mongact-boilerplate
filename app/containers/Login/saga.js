import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './constants';
import request from '../../utils/request';
import { loginRedirect } from './actions';

// Individual exports for testing
export function* loginSaga(data) {
  // See example in containers/HomePage/saga.js
  const login = yield call(request, '/api/endpoints/auth', {
    method: 'POST',
    body: JSON.stringify({
      username: data.user.email,
      password: data.user.password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  try {
    yield put(loginRedirect(login));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield [takeLatest(LOGIN_REQUEST, loginSaga)];
}
