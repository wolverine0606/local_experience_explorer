import React from 'react';
import {Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppNavigation} from '../../../utils/useAppNavigation';
import {AppIcon} from '~/view/components/icons/AppIcon';

export const DiscoverScreen = () => {
  const nav = useAppNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <AppIcon name={'Logo'} />
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
