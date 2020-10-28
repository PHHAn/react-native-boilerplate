import {ERROR} from 'appRedux/actionsType';

const initialState = {
  isError: false,
  message: '',
};

const errorReducer = (state = initialState, action) => {
  const {type, payload} = action;
  const {message} = payload || {};
  switch (type) {
    case ERROR.DIALOG.SHOW:
      return {isError: true, message};
    case ERROR.DIALOG.HIDE:
      return {isError: false, message: ''};
    default:
      return state;
  }
};

export default errorReducer;
