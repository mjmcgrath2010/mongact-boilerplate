import { takeLatest, call, put, all } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './constants';
import { handleLogin } from './actions';
import Api from '../../api';

// Individual exports for testing
export function* loginSaga(data) {
  // See example in containers/HomePage/saga.js
  const login = yield call(Api.post, '/auth', {
    username: data.user.email,
    password: data.user.password,
  });
  try {
    yield put(handleLogin(login));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
}
