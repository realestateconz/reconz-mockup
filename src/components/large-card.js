import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Styles } from '../shared-styles';

const LargeCard = ({ children, style = {} }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
    >
      {children}
    </TouchableOpacity>
  );
};

LargeCard.width = 250;
LargeCard.height = 250;
LargeCard.marginLeft = 20;

const styles = {
  container: {
    width: LargeCard.width,
    height: LargeCard.height,
    marginLeft: LargeCard.marginLeft,
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

export default LargeCard;
