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

export const AppHeader2Text = (props) => (
  <AppText>
    <Text style={{
      fontSize: 18,
      fontWeight: '400'
    }}>
      {props.children}
    </Text>
  </AppText>
);

export const AppHeader1Text = (props) => (
  <AppText>
    <Text style={{
      fontFamily: 'Quicksand-Medium',
      fontSize: 20,
      fontWeight: '400'
    }}>
      {props.children}
    </Text>
  </AppText>
);

