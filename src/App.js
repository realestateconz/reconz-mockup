import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './app-navigation';
import { ThemeProvider } from 'react-native-elements';
import { Platform, UIManager, Text, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import { Button } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';

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

Button.defaultProps = Button.defaultProps || {};
Button.defaultProps.TouchableComponent = TouchableScale;

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
