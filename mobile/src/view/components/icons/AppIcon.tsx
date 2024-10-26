import {
  color,
  ColorProps,
  composeRestyleFunctions,
  createRestyleFunction,
  useRestyle,
  VariantProps,
} from '@shopify/restyle';
import {AppTheme} from '~/view/theme';
import Logo from '../../../assets/svg/logo.svg';

export type IconProps = ThemedProps & {
  name: string;
};

type ThemedProps = ColorProps<AppTheme> &
  VariantProps<AppTheme, 'iconSizes', 'size'>;

/**
 * map "size" prop to "width" StylProp using iconSizes from AppTheme
 */
const size = createRestyleFunction<AppTheme>({
  property: 'size',
  styleProperty: 'width',
  transform: v => {
    const key = v.value as keyof typeof v.theme.iconSizes;
    return v.theme.iconSizes[key];
  },
});

const restyleFunctions = composeRestyleFunctions<AppTheme, ThemedProps>([
  color,
  size as any,
]);

export const AppIcon = ({name, color = 'onSurface', size = 'm'}: IconProps) => {
  // seems like types are broken ... :(, so "any" for now
  const props: any = useRestyle(restyleFunctions as any, {
    color,
    size,
  });
  const style: any = props.style[0];
  const widthValue = style['width'];
  const colorValue = style['color'];

  switch (name) {
    case 'logo':
      return <Logo width={widthValue} height={widthValue} color={colorValue} />;
  }
};
