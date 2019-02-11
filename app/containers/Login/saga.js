import { takeLatest } from 'redux-saga/effects'; // call, put, select
import { LOGIN_REQUEST } from './constants';

// Individual exports for testing
export function* loginSaga() {
  // See example in containers/HomePage/saga.js
  console.log('login request');
}

export default function* rootSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield [takeLatest(LOGIN_REQUEST, loginSaga)];
}
