import {Button, Text, useWindowDimensions, View} from 'react-native';
import {useAppNavigation} from '../../../../utils/useAppNavigation';
import {Screen} from 'react-native-screens';
import {Pressable} from 'react-native';
import {useAppTheme} from '../../../theme';

export const WelcomeScreen = () => {
  const nav = useAppNavigation();
  const {width} = useWindowDimensions();
  const {borderRadii, colors, spacing, textVariants} = useAppTheme();
  const onRegisterPress = () => {
    nav.navigate('AuthStack', {screen: 'SignUp'});
  };
  const onSignInPress = () => {
    nav.navigate('AuthStack', {screen: 'SignIn'});
  };
  return (
    <Screen>
      <Text
        style={{
          alignSelf: 'center',
          color: 'white',
          top: 100,
        }}>
        welcome
      </Text>
      <View style={{rowGap: spacing.s}}>
        <Pressable onPress={onRegisterPress} style={{alignItems: 'center'}}>
          <View
            style={{
              borderRadius: borderRadii.m,
              backgroundColor: colors.onPrimary,
              width: width - spacing.m * 2,
              top: 400,
            }}>
            <Text
              style={{
                textAlign: 'center',
                padding: spacing.s,
                ...textVariants.bodyLarge,
              }}>
              Create account
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={onSignInPress} style={{alignItems: 'center'}}>
          <View
            style={{
              borderRadius: borderRadii.m,
              width: width - spacing.m * 2,
              top: 400,
            }}>
            <Text
              style={{
                color: colors.onPrimary,
                textAlign: 'center',
                padding: spacing.s,
                ...textVariants.bodyLarge,
              }}>
              Log in
            </Text>
          </View>
        </Pressable>
      </View>
    </Screen>
  );
};
