import { property } from 'lodash';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

const DummyScreen = (props) => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.spacer}/>
      <View style={styles.content}>
        {/* <Text>DummyScreen</Text> */}
        <Button
          title="Go back"
          onPress={()=>{
            goBack();
          }}
        />

      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  spacer: {
    flex: 1
  },
  content: {
    flex: 1,

    backgroundColor: 'white'
  }
};

export default DummyScreen;
