import React, { useState } from 'react';
import MapView from 'react-native-maps';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';
import { Alert } from 'react-native';
import { Input } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

const mapStyle = require('../../assets/custom-map-style.json');

const MapScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" />
      <MapView
        provider="google"
        style={styles.container}
        showsUserLocation
        showsMyLocationButton
        customMapStyle={mapStyle}
        initialCamera={{
          center: {
            latitude:-36.88817344482469,
            longitude: 174.7739190560335
          },
          pitch: 0,
          heading: 0,
          altitude: 0,
          zoom: 12
        }}
      />

      <SafeAreaView
        style={[styles.overlay,styles.content]}
        pointerEvents="box-none"
      >
        <Input
          leftIcon={{
            name:'search',
            type: 'feather',
            color: 'grey',
            containerStyle: {
              paddingHorizontal: 10
            }
          }}
          rightIcon={{
            name: 'options-outline',
            type: 'ionicon',
            color: 'black',
            containerStyle: {
              paddingHorizontal: 10,
              borderLeftWidth: 1,
              borderColor: 'lightgrey'
            }
          }}
          placeholder="Enter suburb, region or city"
          returnKeyType="search"
          value={searchValue}
          lightTheme
          inputContainerStyle={styles.inputContainer}
          containerStyle={styles.searchBarContainer}
          onChangeText={(text)=>{
            setSearchValue(text);
          }}
          onSubmitEditing={()=>{
            Alert.alert('Search value submitted');
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = {
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent:'space-between',
    alignItems: 'center',
    marginHorizontal: 20
  },
  overlay: {
    position: 'absolute',
    left: 0, right: 0,
    top: 0, bottom: 0,
  },
  searchBarContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  inputContainer: {
    //borderRadius: 30,
    backgroundColor:'white',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderBottomWidth: 1
  }
};

export default MapScreen;
