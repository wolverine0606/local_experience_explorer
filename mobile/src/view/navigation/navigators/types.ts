import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UIEventHandler} from 'react';

export type MainTabsParamList = {
  Home: {id: string; name: string; discovered?: string};
  Discover: undefined;
  MyProfile: undefined;
};

export type AuthStackParamsList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  setPassword: undefined;
  ForgotPassword: undefined;
  CreateNewPassword: undefined;
};

export type AppStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamsList>;
  Tabs: NavigatorScreenParams<MainTabsParamList>;
  Maps: undefined;
};

export type AppStackScreenProps<T extends keyof MainTabsParamList> =
  NativeStackScreenProps<MainTabsParamList, T>;
