import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

import {persistStore, persistReducer} from 'redux-persist';

import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import rootReducer from 'appRedux/reducers';
import rootSaga from 'appRedux/sagas';

const bindMiddleware = middleware => applyMiddleware(...middleware);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0,
  stateReconciler: autoMergeLevel1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
  const middlewares = [];
  const sagaMiddleware = createSagaMiddleware();
  if (__DEV__) {
    const loggerMiddleware = createLogger({
      collapsed: (getState, action, logEntry) => !logEntry.error,
    });
    middlewares.push(loggerMiddleware);
  }
  middlewares.push(sagaMiddleware);
  const store = createStore(persistedReducer, bindMiddleware(middlewares));
  const persistor = persistStore(store);
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return {store, persistor};
}

export default configureStore;
