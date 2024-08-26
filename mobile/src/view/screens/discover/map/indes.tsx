import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import {Screen} from 'react-native-screens';

export const MapScreen = () => {
  return (
    <View>
      <MapView
        style={StyleSheet.absoluteFillObject}
        provider="google"></MapView>
    </View>
  );
};
