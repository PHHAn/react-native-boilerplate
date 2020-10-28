import { OTHER } from 'appRedux/actionsType';

export const getVersionSubmit = payload => ({
    type: OTHER.GET_APP_VERSION.HANDLER,
    payload,
  });

  export const getVersionSuccess = payload => ({
    type: OTHER.GET_APP_VERSION.SUCCESS,
    payload,
  });
