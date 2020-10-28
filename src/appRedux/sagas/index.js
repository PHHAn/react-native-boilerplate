import {fork, all} from 'redux-saga/effects';
// Saga Imports
import otherSagas from './otherSagas';
import authSagas from './authSagas';
export default function* rootSaga() {
  yield all([
    // Sagas
    fork(otherSagas),
    fork(authSagas),
  ]);
}
