import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Icon } from 'react-native-elements';
import MoreDrawer from './components/more-drawer';
import HomeScreen from './screens/home-screen/home-screen';
import SearchScreen from './screens/search-screen';
import SavedScreen from './screens/saved-screen';
import UpdatesScreen from './screens/updates-screen';
import DummyScreen from './screens/dummy-screen';
import { createStackNavigator, CardStyleInterpolators } from 'react-navigation-stack';
import ListingDetailScreen from './screens/listing-detail-screen';

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

const ListingStack = createSharedElementStackNavigator({
  'HomeTabs': {
    screen: TabNavigator
  },
  'ListingDetail': {
    screen: ListingDetailScreen
  }
},{
  defaultNavigationOptions: {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
  }
});


const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: ListingStack,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: () => (
        <Icon name="home" type="material-community" color="lightgrey"/>
      )
    }
  },
  MortgageCalculator: {
    screen: DummyScreen,
    navigationOptions: {
      drawerLabel: 'Mortgage calculator',
      drawerIcon: () => (
        <Image source={require('../assets/images/mortgage-calculator-drawer-icon.png')}/>
      )
    }
  },
  AgentSearch: {
    screen: DummyScreen,
    navigationOptions: {
      drawerLabel: 'Search for an agent',
      drawerIcon: () => (
        <Image source={require('../assets/images/agent-search-drawer-icon.png')}/>
      )
    }
  },
  News: {
    screen: DummyScreen,
    navigationOptions: {
      drawerLabel: 'News',
      drawerIcon: () => (
        <Image source={require('../assets/images/news-drawer-icon.png')}/>
      )
    }
  },
  AgentPro: {
    screen: DummyScreen,
    navigationOptions: {
      drawerLabel: 'Agent Pro website',
      drawerIcon: () => (
        <Image source={require('../assets/images/agent-pro-drawer-icon.png')}/>
      )
    }
  },
  ContactUs: {
    screen: DummyScreen,
    navigationOptions: {
      drawerLabel: 'Contact us',
      drawerIcon: () => (
        <Image source={require('../assets/images/contact-us-drawer-icon.png')}/>
      )
    }
  },
  Help: {
    screen: DummyScreen,
    navigationOptions: {
      drawerLabel: 'Help',
      drawerIcon: () => (
        <Image source={require('../assets/images/help-drawer-icon.png')}/>
      )
    }
  },
  RateApp: {
    screen: DummyScreen,
    navigationOptions: {
      drawerLabel: 'Rate app / feedback',
      drawerIcon: () => (
        <Image source={require('../assets/images/rate-app-drawer-icon.png')}/>
      )
    }
  },
  About: {
    screen: DummyScreen,
    navigationOptions: {
      drawerLabel: 'About realestate.co.nz',
      drawerIcon: () => (
        <Image source={require('../assets/images/about-drawer-icon.png')}/>
      )
    }
  },
  Legal: {
    screen: DummyScreen,
    navigationOptions: {
      drawerLabel: 'Legal notices',
      drawerIcon: () => (
        <Image source={require('../assets/images/legal-drawer-icon.png')}/>
      )
    }
  },
},{
  drawerPosition: 'right',
  hideStatusBar: true,
  contentComponent: MoreDrawer
});



export default createAppContainer(DrawerNavigator);
