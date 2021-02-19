import React from 'react';
import { Text } from 'react-native';

export const AppText = (props) => (
  <Text
    style={{
      fontFamily: 'Quicksand-Regular',
      fontSize: 15
    }}
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
  appHeader1Text: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 20,
    fontWeight: '400'
  },
  appHeader2Text:{
    fontSize: 18,
    fontWeight: '400'
  },
  appHeader3Text: {
    fontSize: 16,
    fontWeight: '400'
  }
};

