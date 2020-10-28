import {put, call} from 'redux-saga/effects';
import {getUserInfoSuccess} from 'appRedux/actions/authActions';
import {getUserInfoApi} from 'services/api/authApi';
import {invoke} from 'helpers/sagas';
import {parseUserInfo} from 'appRedux/parsers/authParses';

export function* getUserInfoSaga({payload, type}) {
  const {showLoading = true, callback = () => {}} = payload || {};
  yield invoke(
    function* execution() {
      const result = yield call(getUserInfoApi);
      const dataParse = parseUserInfo(result);
      yield put(getUserInfoSuccess(dataParse));
      yield callback(null, dataParse);
    },
    null,
    showLoading,
    type,
  );
}
