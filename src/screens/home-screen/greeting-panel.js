import React from 'react';
import { View, Text } from 'react-native';
import { AppText, AppHeaderText } from '../../components/app-text';
import { Button } from 'react-native-elements';

const GreetingPanel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <AppHeaderText>
          Welcome
          </AppHeaderText>
          <AppText>
          Start your search for a dream house here
          </AppText>
        </View>
        <View>
          <Button
            buttonStyle={{ backgroundColor:'darkslategrey' }}
            title="Log in"
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    height: 100,
    width: '100%',
    left: 0, right: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};

export default GreetingPanel;
