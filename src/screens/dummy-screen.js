import { property } from 'lodash';
import React from 'react';
import { View, Text, Button } from 'react-native';

const DummyScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>DummyScreen</Text>
      <Button
        title="Go back"
        onPress={()=>{
          props.navigation.navigate('Home');
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default DummyScreen;
