import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabsParamList} from './types';
import {DiscoverScreen, HomeScreen} from '../../screens';
import {AppBox} from '~/view/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppTheme} from '~/view/theme';
const MainTabs = createBottomTabNavigator<MainTabsParamList>();
export const MainTabsNavigation = () => {
  const {colors, spacing} = useAppTheme();

  return (
    <MainTabs.Navigator
      initialRouteName={'Home'}
      backBehavior={'initialRoute'}
      screenOptions={{
        tabBarActiveTintColor: colors.onPrimary,
        tabBarInactiveTintColor: colors.onSurfaceVariant,
      }}>
      <MainTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="home"
                size={spacing.xl}
                color={focused ? colors.onPrimary : colors.onSurfaceVariant}
              />
            );
          },
        }}
      />
      <MainTabs.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="compass"
                size={spacing.xl}
                color={focused ? colors.onPrimary : colors.onSurfaceVariant}
              />
            );
          },
        }}
      />
    </MainTabs.Navigator>
  );
};
