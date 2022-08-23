import { call, put, takeEvery } from 'redux-saga/effects';

import Action from './action';
import { fetchJokeApi } from '../api';

// worker saga: will be fired on fetch math fact actions
function* fetchJoke(action) {
  console.log('### fetchJoke worker saga action : ', action);

  try {
    const res = yield call(fetchJokeApi);

    console.log('### res', res);

    yield put({ type: Action.FETCH_SUCCESS, payload: { joke: res.joke } });
  } catch (e) {
    yield put({
      type: Action.FETCH_FAILED,
      payload: { message: e.message },
    });
  }
}

// watcher saga: will be fired on action match
function* mySaga() {
  yield takeEvery(Action.FETCH_REQUEST, fetchJoke);
}

export default mySaga;
