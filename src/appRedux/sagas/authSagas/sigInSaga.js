import {put, call} from 'redux-saga/effects';
import {signInSuccess} from 'appRedux/actions/authActions';
import {signInApi} from 'services/api/authApi';
import {invoke} from 'helpers/sagas';
import {parseUserInfo} from 'appRedux/parsers/authParses';

export function* sigInSaga({payload, type}) {
  const {showLoading = true, callback = () => {}} = payload || {};
  yield invoke(
    function* execution() {
      const result = yield call(signInApi);
      const dataParse = parseUserInfo(result);
      yield put(signInSuccess(dataParse));
      yield callback(null, dataParse);
    },
    null,
    showLoading,
    type,
  );
}
