/**
 * @format
 */

import ReactNative, {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
ReactNative.unstable_enableLogBox();

AppRegistry.registerComponent(appName, () => App);
