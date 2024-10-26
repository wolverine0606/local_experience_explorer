import Animated from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {AppButton, AppButtonProps} from './AppButton';
import {AppBox} from '../layout/AppBox';
import {useBaseAnimatedKeyboard} from '~/utils';

export const AnimatedButton = (
  props: AppButtonProps & {customOffset?: number},
) => {
  return (
    <AppBox borderRadius="m" backgroundColor="surface">
      <AppButton {...props} />
    </AppBox>
  );
};
