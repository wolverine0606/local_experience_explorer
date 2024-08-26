import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {
  AppStackScreenProps,
  MainTabsParamList,
} from '../../navigation/navigators/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const HomeScreen = () => {
  const nav = useNavigation<NativeStackNavigationProp<MainTabsParamList>>();
  const user = useRoute<AppStackScreenProps<'Home'>['route']>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'white'}}>{user.params?.discovered}</Text>
      <Button title="Go to Discover" onPress={() => nav.navigate('Discover')} />
    </View>
  );
};
