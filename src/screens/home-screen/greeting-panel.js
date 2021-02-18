import React from 'react';
import { View } from 'react-native';
import { AppText, AppHeader1Text } from '../../components/app-text';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { timeOfDayGreeting, capitaliseWords } from '../../lib/utils';

const GreetingPanel = ({ loggedIn = true, onLogin }) => {
  return (
    <View style={styles.container}>
      {loggedIn ? (
        <View style={styles.row}>
          <View style={styles.leftPanel}>
            <AppHeader1Text>
              {`${capitaliseWords(timeOfDayGreeting())}, Olga!`}
            </AppHeader1Text>
            <AppText>
            Start your search for a dream house here
            </AppText>
          </View>
          <View>
            <Icon
              color="darkgrey"
              reverse
              name="user"
              type="feather"
              size={30}
              onPress={()=>{
                onLogin(false);
              }}
            />
          </View>
        </View>
      ) : (
        <View style={styles.row}>
          <View style={styles.leftPanel}>
            <AppHeader1Text>
              {`${capitaliseWords(timeOfDayGreeting())}!`}
            </AppHeader1Text>
            <AppText>
            Login or sign up to get personalised recommendations
            </AppText>
          </View>
          <View>
            <Button
              buttonStyle={{ backgroundColor:'darkgrey' }}
              title="Log in or sign up"
              onPress={()=>{
                onLogin(true);
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = {
  container: {
    height: 120,
    width: '100%',
    left: 0, right: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftPanel: {
    height: 80,
    flex: 1,
    justifyContent: 'space-around',
  }
};

export default GreetingPanel;
