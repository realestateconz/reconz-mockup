import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import * as Animatable from 'react-native-animatable';
const Footer = ({
  leftComponent = <View/>,
  rightComponent = <View/>,
  style = {}
}) => {
  const { width } = useDimensions().window;
  return (
    <Animatable.View
      animation="fadeInUp"
      style={[styles.container, style]}
    >
      <SafeAreaView>
        <View style={{ ...styles.footerRow, width }}>
          {leftComponent}
          {rightComponent}
        </View>

      </SafeAreaView>
    </Animatable.View>
  );
};

const styles = {
  container: {
    position:'absolute',
    left:0, right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderTopWidth: 1,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20
  }
};

export default Footer;
