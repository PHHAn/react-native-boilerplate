import {createSelector} from 'reselect';
import _ from 'lodash';
const getLoadingActionsSelector = state => state.loading.loadingActions;
const getFetchingActionsSelector = state => state.loading.fetchingActions;

export const getIsLoadingSelector = createSelector(
  getLoadingActionsSelector,
  actions => {
    return !_.isEmpty(actions);
  },
);

export const getIsFetchingSelector = createSelector(
  getFetchingActionsSelector,
  actions => {
    return !_.isEmpty(actions);
  },
);

// Array String or String ['ACTION'] || 'ACTION'
export const getIsFetchingByActionsTypeSelector = createSelector(
  [getFetchingActionsSelector, (_state, props) => props],
  (fetchingActions, types) => {
    if (_.isArray(types)) {
      return types.some(value => fetchingActions[value]);
    } else {
      return !!fetchingActions[types];
    }
  },
);
