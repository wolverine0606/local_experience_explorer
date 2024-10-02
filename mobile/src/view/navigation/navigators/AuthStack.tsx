import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamsList} from './types';
import {RegisterScreen, SignInScreen, WelcomeScreen} from '../../screens/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useAppTheme} from '../../theme';
import {useAppNavigation} from '../../../utils/useAppNavigation';

const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

export const AuthStackNavigator = () => {
  const {colors} = useAppTheme();
  const nav = useAppNavigation();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.onSecondary},
        headerTitle: '',
        headerBackVisible: false,
        headerLeft: () => (
          <Icon.Button
            name="chevron-left"
            size={20}
            color={colors.onPrimary}
            backgroundColor={colors.onSecondary}
            onPress={() => nav.goBack()}
          />
        ),
      }}>
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen name="SignIn" component={SignInScreen} options={{}} />
      <AuthStack.Screen name="SignUp" component={RegisterScreen} options={{}} />
    </AuthStack.Navigator>
  );
};
