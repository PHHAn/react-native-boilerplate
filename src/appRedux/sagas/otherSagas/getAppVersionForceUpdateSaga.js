import {put, call} from 'redux-saga/effects';
import {invoke} from 'helpers/sagas';
import {parseDataVersionApp} from 'appRedux/parsers/otherParses';
import {getVersionSuccess} from 'appRedux/actions/otherActions';
import {getAppVersionForceUpdateApi} from 'services/api/otherApi';

export function* getAppVersionForceUpdateSaga({payload}) {
  const {callback = () => {}} = payload || {};
  yield invoke(function* execution() {
    const result = yield call(getAppVersionForceUpdateApi);
    const data = parseDataVersionApp(result);
    yield put(getVersionSuccess(data));
    callback(null, data);
  });
}
