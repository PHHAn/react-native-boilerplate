import {takeLatest} from 'redux-saga/effects';
import {sigInSaga} from './sigInSaga';
import {AUTH} from 'appRedux/actionsType';
import {getUserInfoSaga} from './getUserInfoSaga';

export default function* authSagas() {
  yield takeLatest(AUTH.SIGN_IN.HANDLER, sigInSaga);
  yield takeLatest(AUTH.GET_USER_INFO.HANDLER, getUserInfoSaga);
}
