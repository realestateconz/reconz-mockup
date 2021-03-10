import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';

const DummyScreen = (props) => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Dummy Screen</Text>
      <Button
        title="Go Back"
        onPress={()=>{
          goBack();
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default DummyScreen;
