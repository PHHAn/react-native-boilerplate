import { OTHER } from 'appRedux/actionsType';

const initialState = {
  versionApp: '',
};

const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case OTHER.GET_APP_VERSION.SUCCESS: {
      return {...state, versionApp: action.payload};
    }
    default:
      return state;
  }
};

export default otherReducer;
