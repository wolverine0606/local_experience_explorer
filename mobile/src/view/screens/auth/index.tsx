import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';

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
export const AuthScreen = () => {
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
    console.log(subscriber);

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
      <Button title="log out" onPress={logOut} />
    </View>
  );
};
export * from './SignIn';
export * from './Welcome';
export * from './Register';
