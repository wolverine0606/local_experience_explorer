import React from 'react';
import {AppNavigator} from './navigation/navigators/App';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {darkTheme} from './theme';
import {ThemeProvider} from '@shopify/restyle';

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
