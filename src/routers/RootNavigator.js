import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationServices from 'utils/navigationServices';
import SCENE_NAMES from 'constants/sceneName';
// Screen Import
import SignInContainer from 'scenes/auth/signIn/SignIn.container';
import {TransitionPresets} from '@react-navigation/stack';
import MainTabNavigator from './TabNavigator';
import GetStartContainer from 'scenes/getStart/GetStart.container';
import DummyScreen from 'scenes/dummy';
const Stack = createStackNavigator();

function RootNavigator({onNavigationStateChange}) {
  return (
    <NavigationContainer
      onStateChange={onNavigationStateChange}
      ref={navigatorRef => {
        NavigationServices.setTopLevelNavigator(navigatorRef);
      }}>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: null,
          headerTitleAlign: 'center',
          headerTruncatedBackTitle: null,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={SCENE_NAMES.GET_START}>
        {__DEV__ && (
          <Stack.Screen name={SCENE_NAMES.DUMMY} component={DummyScreen} />
        )}
        {/* Plop screen */}
        <Stack.Screen name={SCENE_NAMES.SIGN_IN} component={SignInContainer} />
        <Stack.Screen
          options={{headerShown: false}}
          name={SCENE_NAMES.MAIN}
          component={MainTabNavigator}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={SCENE_NAMES.GET_START}
          component={GetStartContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
