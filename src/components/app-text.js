import React from 'react';
import { Text } from 'react-native';

export const AppText = (props) => (
  <Text
    style={{
      fontFamily: 'Quicksand-Regular'
    }}
  >
    {props.children}
  </Text>
);

export const AppHeaderText = (props) => (
  <AppText>
    <Text style={{
      fontSize: 30
    }}>
      {props.children}
    </Text>
  </AppText>
);

