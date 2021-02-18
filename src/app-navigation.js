import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import HomeScreen from './screens/home-screen/home-screen';
import SearchScreen from './screens/search-screen';
import SavedScreen from './screens/saved-screen';
import ProfileScreen from './screens/profile-screen';



const TabNavigator = createBottomTabNavigator({
  'For you': {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} type="feather"/>
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
  'Profile': {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" color={tintColor} type="feather"/>
      )
    }
  },
  'More': {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="more-horizontal" color={tintColor} type="feather"/>
      )
    }
  },
},{
  tabBarOptions:{
    activeTintColor: 'black',
    inactiveTintColor: 'grey'
  }
});

export default createAppContainer(TabNavigator);
