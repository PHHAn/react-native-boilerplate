import {CONNECTIVITY} from 'appRedux/actionsType';

const initialState = {
  isConnected: true,
};

const connectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECTIVITY.APP_CONNECTIVITY_CHANGE: {
      return {
        ...state,
        isConnected: action.payload,
      };
    }
    default:
      return state;
  }
};

export default connectReducer;
