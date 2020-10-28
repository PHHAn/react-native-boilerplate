import React, {useEffect, useState, useCallback} from 'react';
import NetInfo from '@react-native-community/netinfo';
import RootNavigator from 'routers/RootNavigator';
import {onAppConnectivityChange} from 'appRedux/actions/connectActions';
import {useActions} from 'hooks/useActions';
import useSelectorShallow from 'hooks/useSelectorShallowEqual';
import {getIsLoadingSelector} from 'appRedux/selectors/loadingSelector';
import {getIsConnectedSelector} from 'appRedux/selectors/connectSelector';
import {getErrorSelector} from 'appRedux/selectors/errorSelector';
import {hideError} from 'appRedux/actions/alertActions';
import DialogAlertNotification from 'components/Dialog/DialogAlertNotification';
import AppLoading from 'components/AppLoading';
import {getActiveRouteName} from 'utils/activeRouteName';
import {BackHandler, Alert} from 'react-native';
import SCENE_NAMES from 'constants/sceneName';
import NavigationServices from 'utils/navigationServices';
import I18n from 'utils/i18n';

export default function Scenes() {
  const isConnected = useSelectorShallow(getIsConnectedSelector);
  const actions = useActions({onAppConnectivityChange, hideError});
  const [currentRouteName, setCurrentRouteName] = useState('');
  const isLoading = useSelectorShallow(getIsLoadingSelector);
  const error = useSelectorShallow(getErrorSelector);
  console.log('>>>isLoading1', isLoading);

  const handleBackPress = useCallback(() => {
    console.log('>>>isLoading', isLoading);

    if (isLoading) {
      return true;
    }
    switch (currentRouteName) {
      case SCENE_NAMES.HOME:
      case SCENE_NAMES.SIGN_IN:
      case '':
        Alert.alert(
          I18n.t('alertExitApp.title'),
          I18n.t('alertExitApp.description'),
          [
            {
              text: I18n.t('alertExitApp.cancel'),
              style: 'cancel',
            },
            {
              text: I18n.t('alertExitApp.ok'),
              onPress: () => BackHandler.exitApp(),
            },
          ],
          {cancelable: false},
        );
        break;
      case 'AnotherCase':
        // handler
        break;
      default:
        NavigationServices.goBack();
        break;
    }
    return true;
  }, [isLoading, currentRouteName]);

  const onNavigationStateChange = action => {
    // console.log('>>>>ACTION_NAVIGATOR:', {action});
    const routeName = getActiveRouteName(action);
    if (currentRouteName !== routeName) {
      setCurrentRouteName(routeName);
      // change the tracker here to use other Mobile analytics SDK.
    }
  };

  const netInfoListener = useCallback(() => {
    state => {
      if (state.isConnected !== isConnected) {
        actions.onAppConnectivityChange(state.isConnected);
      }
    };
  }, [isConnected, actions]);

  // Subscribe net info
  useEffect(() => {
    const subscribeNetInfo = NetInfo.addEventListener(netInfoListener);
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => {
      subscribeNetInfo();
      backHandler.remove();
    };
  }, [netInfoListener, handleBackPress]);

  return (
    <>
      <RootNavigator onNavigationStateChange={onNavigationStateChange} />
      <DialogAlertNotification onPressHide={actions.hideError} error={error} />
      {isLoading && <AppLoading />}
    </>
  );
}
