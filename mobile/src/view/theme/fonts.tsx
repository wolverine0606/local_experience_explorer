import {Platform} from 'react-native';

type SupportedFont =
  | 'TuskerGrotesk5700Bold'
  | 'TuskerGrotesk5600Semibold'
  | 'PoppinsRegular'
  | 'PoppinsMedium'
  | 'PoppinsSemiBold'
  | 'PoppinsBold'
  | 'PoppinsBlack'
  | 'TuskerGrotesk-5700Bold'
  | 'TuskerGrotesk-5600Semibold'
  | 'Poppins-Regular'
  | 'Poppins-Medium'
  | 'Poppins-SemiBold'
  | 'Poppins-Bold'
  | 'Poppins-Black';

export const TuskerGroteskBold: SupportedFont =
  Platform.OS === 'ios' ? 'TuskerGrotesk-5700Bold' : 'TuskerGrotesk5700Bold';
export const TuskerGroteskSemibold: SupportedFont =
  Platform.OS === 'ios'
    ? 'TuskerGrotesk-5600Semibold'
    : 'TuskerGrotesk5600Semibold';
export const PoppinsRegular: SupportedFont =
  Platform.OS === 'ios' ? 'Poppins-Regular' : 'PoppinsRegular'; // 400
export const PoppinsMedium: SupportedFont =
  Platform.OS === 'ios' ? 'Poppins-Medium' : 'PoppinsMedium'; // 500
export const PoppinsSemiBold: SupportedFont =
  Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'PoppinsSemiBold'; // 600
const PoppinsBold: SupportedFont =
  Platform.OS === 'ios' ? 'Poppins-Bold' : 'PoppinsBold'; // 700
const PoppinsBlack: SupportedFont =
  Platform.OS === 'ios' ? 'Poppins-Black' : 'PoppinsBlack'; // 900

export const TuskerGroteskBoldFile = require('../../assets/fonts/TuskerGrotesk5700Bold.otf');
export const TuskerGroteskSemiBoldFile = require('../../assets/fonts/TuskerGrotesk5600Semibold.ttf');
export const PoppinsMediumFile = require('../../assets/fonts/PoppinsMedium.ttf');
export const PoppinsSemiBoldFile = require('../../assets/fonts/PoppinsSemiBold.ttf');

const AppTextFont = {
  TuskerGroteskBold,
  PoppinsRegular,
  PoppinsMedium,
  PoppinsSemiBold,
  PoppinsBold,
  PoppinsBlack,
};

export type AppFont = keyof typeof AppTextFont;
