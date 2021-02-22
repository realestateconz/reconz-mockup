import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './app-navigation';
import { ThemeProvider } from 'react-native-elements';
import { Platform, UIManager, Text, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-view';

if (Platform.OS === 'android') {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('rgba(0,0,0,0)');

  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

Text.allowFontScaling = false;
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style =  { fontFamily: 'Quicksand-Regular' };

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
