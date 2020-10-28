import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeContainer from 'scenes/main/home/Home.container';
import ProfileContainer from 'scenes/main/profile/Profile.container';
import SCENE_NAMES from 'constants/sceneName';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        title: 'abc',
      }}
      initialRouteName={SCENE_NAMES.HOME}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name={SCENE_NAMES.HOME}
        component={HomeContainer}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name={SCENE_NAMES.PROFILE}
        component={ProfileContainer}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
