import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
// import MapView from 'react-native-maps';

export const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        mapType="standard"
        showsUserLocation
        showsMyLocationButton
        style={StyleSheet.absoluteFillObject}
        provider="google"></MapView>
    </View>
  );
};
