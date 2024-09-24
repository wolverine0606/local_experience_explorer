import React, {useEffect, useState} from 'react';
import {AppNavigator} from './navigation/navigators/App';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {darkTheme} from './theme';
import {ThemeProvider} from '@shopify/restyle';
import {Text, View} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Button} from '@rneui/base';

// auth()
//   .createUserWithEmailAndPassword(
//     'jane.doe@example.com',
//     'SuperSecretPassword!',
//   )
//   .then(() => {
//     console.log('User account created & signed in!');
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });
const logOut = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};
const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View style={{margin: 40}}>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View style={{margin: 40}}>
      <Text>Welcome {user.email}</Text>
      <Button style={{padding: 20, backgroundColor: '#fff'}} onPress={logOut}>
        log out
      </Button>
    </View>
  );
};

export default App;
