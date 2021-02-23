import React, { useState, useRef, useEffect } from 'react';
import MapView from 'react-native-maps';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';
import { Platform, Alert, View, LayoutAnimation, ScrollView, PermissionsAndroid } from 'react-native';
import { AppText, AppHeader2Text, TextStyles } from '../components/app-text';
import { Input, Button, ListItem, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const mapStyle = require('../../assets/custom-map-style.json');

const recentSearches = [
  'Meadowbank, Auckland City',
  'Orakei, Auckland City',
  'Greenlane, Auckland City',
  'Newmarket, Auckland City'
];

const MapScreen = () => {
  const inputFieldRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [ mapPaddingTop, setMapPaddingTop ] = useState(1);
  const [inputFieldFocused, setInputFieldFocused] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setMapPaddingTop(0);
    },100);
  },[]);

  const submitSearch = (value)=>{
    Alert.alert('Search value submitted', value);
  };

  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" />
      <View style={[styles.overlay,{ paddingTop: mapPaddingTop }]}>
        <MapView
          provider="google"
          style={styles.container}
          showsUserLocation
          showsMyLocationButton={Platform.OS === 'ios'}
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
          onMapReady={()=>{
            if (Platform.OS === 'android') {
              PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
              ).then(granted => {
                console.log('Location permission granted!');
              });
            }
          }}
        />

      </View>

      <SafeAreaView
        forceInset={{ top: 'always' }}
        style={[
          styles.overlay,
          { backgroundColor: inputFieldFocused ? 'white' : 'transparent' }
        ]}
        pointerEvents="box-none"
      >
        <View
          style={styles.content}
          pointerEvents="box-none"
        >
          <Input
            ref={inputFieldRef}
            leftIcon={{
              name: inputFieldFocused ? 'chevron-left' : 'search',
              type: 'feather',
              color: 'grey',
              containerStyle: {
                paddingHorizontal: 10
              },
              onPress: () => {
                if (inputFieldFocused) {
                  inputFieldRef.current.blur();
                } else {
                  inputFieldRef.current.focus();
                }
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
            inputStyle={TextStyles.appHeader2Text}
            placeholder="Enter suburb, region or city"
            autoCapitalize="words"
            autoCorrect={false}
            autoCompleteType="off"
            returnKeyType="done"
            keyboardAppearance="dark"
            value={searchValue}
            lightTheme
            inputContainerStyle={styles.inputContainer}
            containerStyle={styles.searchBarContainer}
            onChangeText={(text)=>{
              setSearchValue(text);
            }}
            onSubmitEditing={()=>{
              submitSearch(searchValue);
            }}
            onFocus={()=>{
              LayoutAnimation.easeInEaseOut();
              setInputFieldFocused(true);
            }}
            onBlur={()=>{
              LayoutAnimation.easeInEaseOut();
              setInputFieldFocused(false);
            }}
          />
        </View>
        {!inputFieldFocused && (
          <View
            style={styles.bottomButtonContainer}
            pointerEvents="box-none"
          >
            <Button
              title="List view"
              icon={{ name: 'menu', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'dimgrey',
                borderRadius: 20,
                paddingHorizontal: 20,
                width: 200
              }}
              titleStyle={TextStyles.appHeader1Text}
              onPress={()=>{
                Alert.alert('Pressed!');
              }}
            />
          </View>
        )}
        {inputFieldFocused && (
          <>
            <View style={styles.headerRow}>
              <AppText>14,392 total listings</AppText>

              <Button
                title="Browse all locations"
                titleStyle={[TextStyles.appText,{ color: 'grey' }]}
                buttonStyle={{ paddingRight:0 }}
                icon={{ name: 'chevron-right', color: 'grey' }}
                iconRight
                type="clear"
              />
            </View>
            <ScrollView
              style={{
                flex: 1,
                width: '100%',
                backgroundColor:'whitesmoke',
                padding: 20
              }}
              keyboardShouldPersistTaps="always"
            >
              <AppHeader2Text>Recent Searches</AppHeader2Text>
              {recentSearches.map((searchText) => (
                <ListItem
                  key={searchText}
                  Component={TouchableOpacity}
                  containerStyle={{
                    backgroundColor: 'transparent',
                    paddingHorizontal: 0
                  }}
                  onPress={()=>{
                    setSearchValue(searchText);
                    inputFieldRef.current.blur();
                    submitSearch(searchText);
                  }}
                >
                  <Icon
                    name="clock"
                    type="feather"
                    color="darkgrey"
                  />
                  <ListItem.Content>
                    <AppText>
                      {searchText}
                    </AppText>
                  </ListItem.Content>
                </ListItem>
              ))}
            </ScrollView>
          </>
        )}

      </SafeAreaView>
    </>
  );
};

const styles = {
  container: {
    flex: 1
  },
  content: {
    //flex: 1,
    justifyContent:'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10
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
    backgroundColor:'white',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderBottomWidth: 1
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10
  },
  headerRow: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 0,
    justifyContent:'space-between',
    alignItems: 'center'
  }
};

export default MapScreen;
