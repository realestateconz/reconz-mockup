import React from 'react';
import Card from './card';

const MediumCard = ({ children, style = {}, ...cardProps }) => {
  return (
    <Card
      style={[styles.container, style]}
      {...cardProps}
    >
      {children}
    </Card>
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
  }
};

export default MediumCard;
