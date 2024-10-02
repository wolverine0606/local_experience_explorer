import React, {useEffect, useState} from 'react';
import {AppNavigator} from './navigation/navigators/App';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {darkTheme} from './theme';
import {ThemeProvider} from '@shopify/restyle';
import {Text, View} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
