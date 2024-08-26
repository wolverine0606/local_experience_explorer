import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainTabsNavigation} from './MainTabs';
import {MapScreen} from '../../screens/discover/map/indes';
import {AppStackParamList} from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tabs" component={MainTabsNavigation} />
        <Stack.Screen
          options={{headerShown: true}}
          name="Maps"
          component={MapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
