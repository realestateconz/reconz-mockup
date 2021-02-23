import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { AppText, AppHeader1Text, AppHeader2Text, AppHeader3Text, TextStyles } from '../components/app-text';
import { DrawerItems } from 'react-navigation-drawer';
import { ListItem } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

const MoreDrawer = (props) => {
  return (
    <SafeAreaView
      forceInset={{ top: 'always' }}
      style={styles.container}
    >
      <View style={styles.leftIndent}>
        <View style={styles.headerRow}>
          <Image
            source={require('../../assets/images/profile.png')}
          />
          <View style={styles.leftIndent}>
            <AppHeader1Text>John Smith</AppHeader1Text>
            <AppHeader2Text>Edit your profile</AppHeader2Text>
          </View>
        </View>
      </View>

      <View style={{ ...styles.seperator, marginBottom: 0 }}/>
      <ScrollView
        directionalLockEnabled
      >
        {}
        <DrawerItems
          {...props}
          itemStyle={{ borderBottomWidth: 1, borderColor: 'lightgrey' }}
          labelStyle={styles.label}
          activeLabelStyle={styles.activeLabel}
          activeBackgroundColor="#bbbbbb"
          activeTintColor="white"
          onItemPress={({ route, focused })=>{
            if (route.routeName === 'SignOut') {
              props.navigation.closeDrawer();
              console.log('Signing out!!!');
            } else {
              props.navigation.navigate(route);
            }
          }}
        />
        <View style={styles.leftIndent}>
          <AppHeader2Text>{'\n'}Follow us{'\n'}</AppHeader2Text>
          <Image source={require('../../assets/images/follow-icons.png')}/>
          <AppText>{'\n'}App version 4.0.0 (1)</AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgrey',
    marginVertical: 10
  },
  leftIndent: {
    paddingLeft: 30
  },
  label: {
    ...TextStyles.appHeader2Text,
    width: '100%'
  },
  activeLabel: {
    ...TextStyles.appHeader2Text,
    color: 'white'
  },
  headerRow: {
    flexDirection: 'row',
    marginTop: 10
  }
};

export default MoreDrawer;
