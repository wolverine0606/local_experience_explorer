import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {AppStackParamList} from '../../navigation/navigators/types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppNavigation} from '../../../utils/useAppNavigation';

export const DiscoverScreen = () => {
  const nav = useAppNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Icon.Button name="facebook" size={30} color="#900" />
      <Button
        title="go back"
        onPress={() =>
          nav.navigate('Tabs', {
            screen: 'Home',
            params: {
              id: '45',
              name: 'Dmytro',
              discovered: 'discovered new places in Zurich',
            },
          })
        }
      />
      <Button title="go to maps" onPress={() => nav.navigate('Maps')} />
    </View>
  );
};
