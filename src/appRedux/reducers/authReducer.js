import {AUTH} from 'appRedux/actionsType';

const initialState = {
  userInfo: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SIGN_IN.SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
