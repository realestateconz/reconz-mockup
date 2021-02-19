import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import MediumCard from './medium-card';
import { range } from 'lodash';
import { AppHeader2Text, TextStyles } from '../components/app-text';
import { Button } from 'react-native-elements';

const Carousel = ({ title, rightButtonText }) => {

  return (
    <>
      <View
        style={styles.headerContainer}
      >
        <AppHeader2Text>{title}</AppHeader2Text>
        <Button
          title={rightButtonText}
          titleStyle={{ color: 'grey' }}
          buttonStyle={{ paddingRight:0 }}
          icon={{ name: 'chevron-right', color: 'grey' }}
          iconRight
          type="clear"
        />
      </View>

      <ScrollView
        horizontal
        directionalLockEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        snapToInterval={MediumCard.width + MediumCard.marginLeft}
        contentContainerStyle={{ paddingRight: MediumCard.marginLeft }}
        decelerationRate="fast"
      >
        {range(10).map((i)=>(
          <MediumCard
            key={i}
            style={styles.card}
          >
            <Image
              source={require('../../assets/images/tile-image-medium.png')}
              style={{ width: MediumCard.width, height: 130 }}
              resizeMode="contain"
            />
            <View
              style={styles.cardTextContainer}
            >
              <Text
                style={TextStyles.appHeader3Text}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                  324 Remuera Rd, Remuera, Auckland
              </Text>
              <Text>Negotiation</Text>
              <Text>ameneties</Text>
            </View>
          </MediumCard>
        ))}
      </ScrollView>
    </>
  );
};

const styles = {
  headerContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 0
  },
  cardTextContainer: {
    paddingLeft: 10,
  }
};

export default Carousel;
