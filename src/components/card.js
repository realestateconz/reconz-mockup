import React from 'react';
import { Styles } from '../shared-styles';
import TouchableScale from 'react-native-touchable-scale';

const Card = ({ children, style = {}, ...touchableProps }) => {
  return (
    <TouchableScale
      style={[styles.container, style]}
      {...touchableProps}
    >
      {children}
    </TouchableScale>
  );
};

Card.width = 250;
Card.height = 200;
Card.marginLeft = 20;

const styles = {
  container: {
    width: Card.width,
    height: Card.height,
    marginLeft: Card.marginLeft,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,
    marginVertical: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 3,
    ...Styles.shadow
  }
};

export default Card;
