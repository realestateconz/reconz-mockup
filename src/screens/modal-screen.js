import React from 'react';
import { View, Button, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

const ModalScreen = (props) => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPressIn={()=>{
          goBack();
        }}
      >
        <View style={styles.spacer}/>
      </TouchableWithoutFeedback>
      <View style={styles.content}>
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

export default ModalScreen;
