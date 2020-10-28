import {takeLatest} from 'redux-saga/effects';
import {OTHER} from 'appRedux/actionsType';
import {getAppVersionForceUpdateSaga} from './getAppVersionForceUpdateSaga';

export default function* otherSagas() {
  yield takeLatest(OTHER.GET_APP_VERSION.HANDLER, getAppVersionForceUpdateSaga);
}
