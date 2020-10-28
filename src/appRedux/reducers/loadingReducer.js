import {LOADING} from 'appRedux/actionsType';

const initialState = {
  loadingActions: {},
  fetchingActions: {},
};

function addAction(actions, type) {
  return {...actions, [type]: true};
}

function removeAction(actions, type) {
  const action = {...actions};
  delete action[type];
  return action;
}

const loadingReducer = (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case LOADING.DIALOG.SHOW:
      return {
        ...state,
        loadingActions: addAction(state.loadingActions, action.payload),
      };
    case LOADING.DIALOG.HIDE:
      return {
        ...state,
        loadingActions: removeAction(state.loadingActions, action.payload),
      };
    case LOADING.FETCH.FETCHING:
      return {
        ...state,
        fetchingActions: addAction(state.fetchingActions, action.payload),
      };
    case LOADING.FETCH.NON_FETCHING:
      return {
        ...state,
        fetchingActions: removeAction(state.fetchingActions, action.payload),
      };
    default:
      return state;
  }
};

export default loadingReducer;
