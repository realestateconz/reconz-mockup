import React from 'react';
import Card from './card';

const LargeCard = ({ children, style = {}, ...cardProps }) => {
  return (
    <Card
      style={[styles.container, style]}
      {...cardProps}
    >
      {children}
    </Card>
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
  }
};

export default LargeCard;
