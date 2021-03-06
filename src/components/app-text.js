import React from 'react';
import { Text } from 'react-native';

export const AppText = (props) => (
  <Text
    style={TextStyles.appText}
  >
    {props.children}
  </Text>
);

export const AppHeader3Text = (props) => (
  <AppText>
    <Text style={TextStyles.appHeader3Text}>
      {props.children}
    </Text>
  </AppText>
);

export const AppHeader2Text = (props) => (
  <AppText>
    <Text style={TextStyles.appHeader2Text}>
      {props.children}
    </Text>
  </AppText>
);

export const AppHeader1Text = (props) => (
  <AppText>
    <Text style={TextStyles.appHeader1Text}>
      {props.children}
    </Text>
  </AppText>
);

export const TextStyles = {
  appText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 15
  },
  appHeader1Text: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 20,
    fontWeight: '400'
  },
  appHeader2Text:{
    fontFamily: 'Quicksand-Regular',
    fontSize: 18,
    fontWeight: '400'
  },
  appHeader3Text: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
    fontWeight: '400'
  }
};

