import { call, select } from 'redux-saga/effects';
import makeSelectLogin from '../containers/Login/selectors';
import request from '../utils/request';

export default {
  get: function* get(url) {
    const auth = yield select(makeSelectLogin());
    return yield call(request, url, {
      headers: {
        access_token: auth.user.token,
      },
    });
  },
  post: function* post(url, body) {
    const auth = yield select(makeSelectLogin());
    return yield call(request, url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        access_token: auth.user.token,
        'Content-Type': 'application/json',
      },
    });
  },
  update: function* update(url, body) {
    const auth = yield select(makeSelectLogin());
    return yield call(request, url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        access_token: auth.user.token,
        'Content-Type': 'application/json',
      },
    });
  },
  delete: function* remove(url) {
    const auth = yield select(makeSelectLogin());
    return yield call(request, url, {
      method: 'DELETE',
      headers: {
        access_token: auth.user.token,
        'Content-Type': 'application/json',
      },
    });
  },
};
