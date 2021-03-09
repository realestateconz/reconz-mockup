import React from 'react';
import { ScrollView, View, Text, Image, Dimensions } from 'react-native';
import LargeCard from './large-card';
import { range } from 'lodash';
import { AppHeader2Text, AppText, TextStyles } from '../components/app-text';
import ListingSummary from '../components/listing-summary';
import AmenitiesRow from '../components/amenities-row';
import TouchableScale from 'react-native-touchable-scale';
import { useNavigation } from 'react-navigation-hooks';
import { SharedElement } from 'react-navigation-shared-element';
import Animated from 'react-native-reanimated';
import { sharedElementIdForKey } from '../lib/utils';

const { width } = Dimensions.get('window');


const ListingSelector = ({ title, rightButtonText, marginTop = 20, height, sharedElementIdPrefix = 'image' }) => {
  const { navigate } = useNavigation();
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
        contentContainerStyle={{ paddingBottom: 200 }}
        //decelerationRate="fast"
      >
        {range(10).map((i)=>(
          <TouchableScale
            key={i}
            style={styles.card}
            onPress={() => {
              navigate('ListingDetail', { sharedElementId: sharedElementIdForKey(sharedElementIdPrefix,i) });
            }}
          >
            <SharedElement id={sharedElementIdForKey(sharedElementIdPrefix, i)}>
              <Animated.Image
                source={require('../../assets/images/tile-image-large.png')}
                style={{ width: width - 2 * LargeCard.marginLeft, height: LargeCard.height }}
                resizeMode="contain"
              />
            </SharedElement>
            <ListingSummary
              style={styles.cardTextContainer}
              address={'324 Remuera Rd, Remuera, Auckland'}
              saleType={'Negotiation'}
              bedroomCount={4}
              bathroomCount={3}
              buildingType="House"
            />
          </TouchableScale>
        ))}
      </ScrollView>
    </View>
  );
};

ListingSelector.sharedElements = (navigation, otherNavigation, showing) => {
  return ['image123'];
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
    marginBottom: 10,
    paddingBottom: 10,
    // backgroundColor: 'limegreen'
  },
  cardTextContainer: {
    paddingLeft: 10,
  },
};

export default ListingSelector;
