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
import {useRef} from 'react';
import {AppPressable} from '~/view/components/buttons/AppPressable';
import {AnimatedButton} from '~/view/components/buttons/AnimatedButton';

export const RegisterScreen = () => {
  const {onEmailChange, onPasswordChange, email, password, onLoginPress} =
    useScreen();
  const {colors, spacing, otherSizes, iconSizes} = useAppTheme();

  const iconRef = useRef(null);

  const disabled = false;

  const {rightIcon, handlePasswordVisibility, passwordVisibility} =
    useTogglePasswordVisibility();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        rowGap: spacing.l,
        marginHorizontal: spacing.s,
      }}>
      <AppBox
        borderRadius="m"
        borderColor="onSurfaceVariant"
        borderWidth={otherSizes.xxxxs}
        padding="m">
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
        padding="m">
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
        <AppPressable onPress={handlePasswordVisibility}>
          <Icon
            ref={iconRef}
            name={rightIcon}
            color={colors.onPrimary}
            solid
            size={iconSizes.s}
          />
        </AppPressable>
      </AppBox>
      <AppBox justifyContent="flex-end" flex={0.5} pb="s">
        <AnimatedButton
          disabled={disabled}
          title={'login'}
          onPress={onLoginPress}
          type="tonal"
        />
      </AppBox>
    </SafeAreaView>
  );
};
