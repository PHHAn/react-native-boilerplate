import {CONNECTIVITY} from 'appRedux/actionsType';

export const onAppConnectivityChange = payload => ({
  type: CONNECTIVITY.APP_CONNECTIVITY_CHANGE,
  payload,
});
