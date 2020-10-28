import {LOADING} from 'appRedux/actionsType';

export const showLoading = payload => ({
  type: LOADING.DIALOG.SHOW,
  payload,
});

export const hideLoading = payload => ({
  type: LOADING.DIALOG.HIDE,
  payload,
});

export const onFetching = payload => ({
  type: LOADING.FETCH.FETCHING,
  payload,
});

export const nonFetching = payload => ({
  type: LOADING.FETCH.NON_FETCHING,
  payload,
});
