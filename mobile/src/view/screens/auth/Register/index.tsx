import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import {useAppTheme} from '../../../theme';
import {useScreen} from './useScreen';
import {AppBox} from '~/view/components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTogglePasswordVisibility} from '~/utils/useTogglePasswordVisibility';
import {useRef, useState} from 'react';

export const RegisterScreen = () => {
  const {onEmailChange, onPasswordChange, email, password} = useScreen();
  const {colors, spacing, borderRadii, otherSizes, iconSizes} = useAppTheme();
  const iconRef = useRef(null);
  console.log('rerender', password);

  const {rightIcon, handlePasswordVisibility, passwordVisibility} =
    useTogglePasswordVisibility();
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', rowGap: spacing.l}}>
      <AppBox
        borderRadius="m"
        borderColor="onSurfaceVariant"
        borderWidth={otherSizes.xxxxs}
        padding="m"
        marginHorizontal="s">
        <TextInput
          keyboardAppearance="dark"
          style={{color: colors.onSurfaceVariant}}
          placeholder="email"
          placeholderTextColor={colors.onSurfaceVariant}
          autoComplete="email"
          autoCapitalize="none"
          textContentType="emailAddress"
          onChangeText={onEmailChange}
          value={email}
        />
      </AppBox>
      <AppBox
        borderRadius="m"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderColor="onSurfaceVariant"
        borderWidth={otherSizes.xxxxs}
        padding="m"
        marginHorizontal="s">
        <TextInput
          keyboardAppearance="dark"
          style={{
            flex: 1,
            color: colors.onSurfaceVariant,
          }}
          placeholderTextColor={colors.onSurfaceVariant}
          placeholder="Enter password"
          secureTextEntry={passwordVisibility}
          onChangeText={onPasswordChange}
          value={password}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <Icon
            ref={iconRef}
            name={rightIcon}
            color={colors.onPrimary}
            solid
            size={iconSizes.s}
          />
        </Pressable>
      </AppBox>
    </SafeAreaView>
  );
};
