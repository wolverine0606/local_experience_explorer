import React, {useEffect, useState} from 'react';
import {AppNavigator} from './navigation/navigators/App';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {darkTheme} from './theme';
import {ThemeProvider} from '@shopify/restyle';
import {Text, View} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {KeyboardProvider} from 'react-native-keyboard-controller';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <SafeAreaProvider>
        <KeyboardProvider statusBarTranslucent>
          <AppNavigator />
        </KeyboardProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
