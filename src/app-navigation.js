import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';
import MoreDrawer from './components/more-drawer';
import HomeScreen from './screens/home-screen/home-screen';
import SearchScreen from './screens/search-screen';
import SavedScreen from './screens/saved-screen';
import UpdatesScreen from './screens/updates-screen';



const TabNavigator = createBottomTabNavigator({
  'For you': {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        // <Icon name="user" color={tintColor} type="feather"/>
        <Image
          source={require('../assets/images/profile-tab-icon.png')}
          style={{ tintColor }}
        />
      )
    }
  },
  'Search': {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" color={tintColor} type="feather"/>
      )
    }
  },
  'Saved': {
    screen: SavedScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="star" color={tintColor} type="feather"/>
      )
    }
  },
  'Updates': {
    screen: UpdatesScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="bell" color={tintColor} type="feather"/>
      )
    }
  },
  'More': {
    screen: () => null,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon:
        ({ tintColor }) => (
          <Icon
            name="more-horizontal"
            color={tintColor}
            type="feather"
          />
        ),
      tabBarOnPress: () => {
        navigation.openDrawer();
      }
    })
  },
},{
  tabBarOptions:{
    activeTintColor: 'black',
    inactiveTintColor: 'grey'
  }
});

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TabNavigator
  }
},{
  drawerPosition: 'right',
  hideStatusBar: true,
  contentComponent: MoreDrawer
});



export default createAppContainer(DrawerNavigator);
