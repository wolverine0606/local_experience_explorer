import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainTabsParamList = {
  Home: {id: string; name: string; discovered?: string};
  Discover: undefined;
  MyProfile: undefined;
};

export type AppStackParamList = {
  Tabs: NavigatorScreenParams<MainTabsParamList>;
  Maps: undefined;
};

export type AppStackScreenProps<T extends keyof MainTabsParamList> =
  NativeStackScreenProps<MainTabsParamList, T>;
