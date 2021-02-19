import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import MediumCard from './medium-card';
import { range } from 'lodash';
const Carousel = ({ title, rightButtonText }) => {

  return (
    <ScrollView
      horizontal
      directionalLockEnabled
      showsHorizontalScrollIndicator={false}
      snapToAlignment="start"
      snapToInterval={MediumCard.width + MediumCard.marginLeft}
      decelerationRate="fast"
    >
      {range(50).map((i)=>(
        <MediumCard key={i}>
          <Text>Hello</Text>
        </MediumCard>
      ))}
    </ScrollView>
  );
};

export default Carousel;

/*
<ScrollView
horizontal
directionalLockEnabled
showsHorizontalScrollIndicator={false}
snapToAlignment="start"
snapToInterval={160}
decelerationRate="fast"
/>
<View>
  <Text>Hello</Text>
  <Text>Hello</Text>
  <Text>Hello</Text>
  <Text>Hello</Text>
</View>
</ScrollView>
*/
