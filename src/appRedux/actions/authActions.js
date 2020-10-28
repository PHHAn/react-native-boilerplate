import {AUTH} from 'appRedux/actionsType';

export const signInSubmit = payload => ({
  type: AUTH.SIGN_IN.HANDLER,
  payload,
});

export const signInSuccess = payload => ({
  type: AUTH.SIGN_IN.SUCCESS,
  payload,
});

export const getUserInfoSubmit = payload => ({
  type: AUTH.GET_USER_INFO.HANDLER,
  payload,
});

export const getUserInfoSuccess = payload => ({
  type: AUTH.GET_USER_INFO.SUCCESS,
  payload,
});
