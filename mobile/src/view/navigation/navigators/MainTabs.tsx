import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabsParamList} from './types';
import {HomeScreen} from '../../screens';
const MainTabs = createBottomTabNavigator<MainTabsParamList>();
export const MainTabsNavigation = () => {
  return (
    <MainTabs.Navigator initialRouteName={'Home'} backBehavior={'initialRoute'}>
      <MainTabs.Screen name="Home" component={HomeScreen} />
    </MainTabs.Navigator>
  );
};
