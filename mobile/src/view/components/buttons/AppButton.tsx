import {FC, PropsWithChildren, ReactNode} from 'react';
import {StyleSheet} from 'react-native';

import {ColorProps} from '@shopify/restyle';
import isUndefined from 'lodash/isUndefined';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';

import {AppBox} from '../layout/AppBox';
import {AppText} from '../text/AppText';

import {AppTheme, useAppTheme} from '~/view/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AppLoader} from '../feedback/AppLoader';
import {AppPressable, usePressableOverlay} from './AppPressable';

/**
 * https://m3.material.io/components/buttons/overview
 */
type ButtonType = 'filled' | 'tonal' | 'outlined' | 'text';

export interface AppButtonProps extends ColorProps<AppTheme> {
  title: string | ReactNode;
  type?: ButtonType;
  size?: 'small' | 'large' | 'mini';
  loading?: boolean;
  icon?: string;
  testID?: string;
  onPress?: () => void;
  disabled?: null | boolean | undefined;
}

export const AppButton: FC<AppButtonProps> = props => {
  const {testID, onPress, loading, disabled} = props;
  const {colors} = useAppTheme();

  const {onPressIn, onPressOut, layerStyle} = usePressableOverlay(onPress);

  return (
    <AppPressable
      testID={testID}
      onPress={onPress}
      disabled={loading ? loading : disabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Bg {...props}>
        <Content {...props} />
        <Animated.View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              backgroundColor: colors.onPrimary,
            },
            layerStyle,
          ]}
        />
      </Bg>
    </AppPressable>
  );
};

type ContentProps = Omit<AppButtonProps, 'onPress' | 'testID'>;

export const Content = ({
  size = 'large',
  type = 'filled',
  title,
  icon,
  loading,
  disabled,
  color,
}: ContentProps) => {
  const {opacity} = useAppTheme();

  const finalColor = isUndefined(color)
    ? type === 'tonal' && !disabled
      ? 'onSecondaryContainer'
      : 'onPrimary'
    : color;
  const opacityValue = disabled ? opacity.high : opacity.none;

  const pl =
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    icon || loading
      ? size === 'small' || size === 'mini'
        ? 'm'
        : 'l'
      : size === 'small' || size === 'mini'
      ? 'l'
      : 'xl';
  const pr = size === 'small' || size === 'mini' ? 'l' : 'xl';
  const iconSize = size === 'small' || size === 'mini' ? 's' : 'm';
  const textVariant = size === 'large' ? 'bodyLarge' : 'bodyMedium';

  return (
    <AppBox
      opacity={opacityValue}
      flexDirection="row"
      columnGap="s"
      alignItems="center"
      pl={pl}
      pr={pr}>
      {icon && !loading && (
        <Icon name={icon} size={iconSize == 's' ? 18 : 24} color={finalColor} />
      )}
      {loading && (
        <AppLoader color={finalColor} visible={loading} size={iconSize} />
      )}
      {typeof title === 'string' ? (
        <AppText
          variant={textVariant}
          color={finalColor}
          adjustsFontSizeToFit
          numberOfLines={1}>
          {title}
        </AppText>
      ) : (
        title
      )}
    </AppBox>
  );
};

type BgProps = Pick<AppButtonProps, 'type' | 'disabled' | 'size'>;

const Bg: FC<PropsWithChildren<BgProps>> = ({
  size = 'large',
  type = 'filled',
  children,
  disabled,
}) => {
  const {gradientVariants, buttonSizes, otherSizes, colors, colorAlpha} =
    useAppTheme();
  const height =
    size === 'large'
      ? buttonSizes.l
      : size === 'small'
      ? buttonSizes.m
      : buttonSizes.s;
  const disabledColor = `${colors.secondaryContainer}${colorAlpha[12]}`;
  const baseBgColor = type === 'tonal' ? colors.secondaryContainer : undefined;

  const borderWidth = type === 'outlined' ? otherSizes.xxxxs : undefined;
  const borderColor =
    type === 'outlined'
      ? disabled
        ? disabledColor
        : `${colors.onSurface}${colorAlpha[60]}`
      : undefined;
  const backgroundColor =
    type === 'outlined' || type === 'text'
      ? undefined
      : disabled
      ? disabledColor
      : baseBgColor;

  const withGradient = type === 'filled' && !disabled;

  return (
    <AppBox
      borderRadius="m"
      overflow="hidden"
      height={height}
      borderWidth={borderWidth}
      style={{
        backgroundColor,
        borderColor,
        justifyContent: withGradient ? undefined : 'center',
        alignItems: withGradient ? undefined : 'center',
      }}>
      {withGradient ? (
        <LinearGradient
          style={{height, alignItems: 'center', justifyContent: 'center'}}
          {...gradientVariants.pinkDiagonal}>
          {children}
        </LinearGradient>
      ) : (
        children
      )}
    </AppBox>
  );
};
