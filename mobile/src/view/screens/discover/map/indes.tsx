import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {PERMISSIONS} from 'react-native-permissions';
import {mapStyle} from './types';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import WebView from 'react-native-webview';
// import MapView from 'react-native-maps';

export const MapScreen = () => {
  var region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
  }, []);
  return (
    <View style={{flex: 1}}>
      {/* <View style={{zIndex: 10}}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: process.env.GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
        />
      </View> */}
      <MapView
        initialRegion={region}
        customMapStyle={mapStyle}
        mapType="standard"
        showsUserLocation
        showsMyLocationButton
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}></MapView>
    </View>
  );
};
//https://maps.googleapis.com/maps/api/js?key=AIzaSyALm683qL_pcgl96yrjTAiq-kVAbQaUjTE&loading=async&libraries=places&callback=initMap
