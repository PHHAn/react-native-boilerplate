import * as React from 'react';
import {Text, TextInput} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Scenes from 'scenes';
import configureStore from 'appRedux/store/configureStore';
const storeConfig = configureStore();

function App() {
  if (Text.defaultProps == null) {
    Text.defaultProps = {};
  }
  if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
  }
  TextInput.defaultProps.allowFontScaling = false;
  Text.defaultProps.allowFontScaling = false;

  return (
    <Provider store={storeConfig.store}>
      <PersistGate loading={null} persistor={storeConfig.persistor}>
        <Scenes />
      </PersistGate>
    </Provider>
  );
}

export default App;
