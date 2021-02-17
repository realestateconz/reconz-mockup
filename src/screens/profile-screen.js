import React, { useState } from 'react';
import { Text, View, LayoutAnimation } from 'react-native';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';

const HomeScreen = () => {
  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" />
      <View
        style={{
          ...styles.container,
        }}
      >
        <View
          style={styles.content}
        >
          <Text>Hello this is the Profile screen</Text>
        </View>
      </View>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'orangered',
    padding: 30,
    margin: 10,
    borderRadius: 10
  }
};

export default HomeScreen;
