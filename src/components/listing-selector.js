import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import LargeCard from './large-card';
import { range } from 'lodash';
import { AppHeader2Text, AppText, TextStyles } from '../components/app-text';
import { Button } from 'react-native-elements';
import AmenitiesRow from '../components/amenities-row';
import { Styles } from '../shared-styles';

const ListingSelector = ({ title, rightButtonText, marginTop = 20, height }) => {

  return (
    <View style={{ width: '100%', height }}>
      <View
        style={{ ...styles.headerContainer, marginTop }}
      >
        <AppHeader2Text>{title}</AppHeader2Text>
      </View>

      <ScrollView
        directionalLockEnabled
        snapToAlignment="start"
        contentContainerStyle={{ paddingBottom: 150 }}
        //decelerationRate="fast"
      >
        {range(10).map((i)=>(
          <View
            key={i}
            style={styles.card}
          >
            <Image
              source={require('../../assets/images/tile-image-large.png')}
              style={{ width: '100%', height: LargeCard.height }}
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
              <AppText>Negotiation</AppText>
              <AmenitiesRow
                bedroomCount={4}
                bathroomCount={3}
                buildingType="House"
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = {
  headerContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 20,
    // flexDirection: 'row',
    //backgroundColor: 'hotpink',
    //height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
    //backgroundColor: 'limegreen'
  },
  cardTextContainer: {
    paddingLeft: 10,
  },
};

export default ListingSelector;
