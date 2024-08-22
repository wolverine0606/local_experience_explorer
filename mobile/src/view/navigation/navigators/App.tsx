import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DiscoverScreen, HomeScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="discover" component={DiscoverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
