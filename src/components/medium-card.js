import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Styles } from '../shared-styles';

const MediumCard = ({ children, style = {} }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
    >
      {children}
    </TouchableOpacity>
  );
};

MediumCard.width = 250;
MediumCard.height = 200;
MediumCard.marginLeft = 20;

const styles = {
  container: {
    width: MediumCard.width,
    height: MediumCard.height,
    marginLeft: MediumCard.marginLeft,
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

export default MediumCard;
