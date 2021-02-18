import React from 'react';
import { View, Text, Image } from 'react-native';
import { AppText, AppHeader2Text } from '../../components/app-text';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';

const GreetingPanel = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.overlay, { alignItems: 'flex-end' }]}>
        <Image
          source={require('../../../assets/images/house.png')}
        />
      </View>
      <View style={styles.overlay}>
        <View style={styles.row}>
          <View style={styles.leftPanel}>
            <AppHeader2Text>
              Near you
            </AppHeader2Text>
            <AppText>
              View all properties for sale close to your current location
            </AppText>
            <Button
              buttonStyle={{ backgroundColor:'darkgrey', width: 150 }}
              title="Explore nearby"
            />
          </View>
        </View>
        <View style={styles.separatorLine}/>
      </View>

    </View>
  );
};

const styles = {
  container: {
    height: 160,
    width: '100%',
    left: 0, right: 0,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  leftPanel: {
    height: 120,
    width: '65%',
    justifyContent: 'space-between',
  },
  overlay: {
    position: 'absolute',
    left: 0, right: 0,
    top: 20, botom: 0,
  },
  separatorLine: {
    //width: '100%',
    height: 1,
    margin: 20,
    backgroundColor: 'lightgrey'
  }
};

export default GreetingPanel;
