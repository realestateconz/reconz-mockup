import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './app-navigation';
import { ThemeProvider } from 'react-native-elements';
import { Platform, UIManager, Text } from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

Text.allowFontScaling = false;
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style =  { fontFamily: 'Quicksand-Regular' };

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  );
};

export default App;
