import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import FocusAwareStatusBar from '../../components/focus-aware-status-bar';
import GreetingPanel from './greeting-panel';

const HomeScreen = () => {
  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          ...styles.container,
        }}>
        <GreetingPanel />
        <View
          style={styles.content}
        >
          <Text>HELLO</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'whitesmoke'
  }
};

export default HomeScreen;
