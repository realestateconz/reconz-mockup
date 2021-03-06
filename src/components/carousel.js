import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import MediumCard from './medium-card';
import { range } from 'lodash';
import { AppHeader2Text, AppText, TextStyles } from '../components/app-text';
import { Button } from 'react-native-elements';
import AmenitiesRow from '../components/amenities-row';
import { useNavigation } from 'react-navigation-hooks';
import { SharedElement } from 'react-navigation-shared-element';


const Carousel = ({ title, rightButtonText, marginTop = 20 }) => {
  const { navigate } = useNavigation();
  return (
    <>
      <View
        style={{ ...styles.headerContainer, marginTop }}
      >
        <AppHeader2Text>{title}</AppHeader2Text>
        <Button
          title={rightButtonText}
          titleStyle={[TextStyles.appHeader2Text, { color: 'grey' }]}
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
            onPress={()=>{
              navigate('ListingDetail');
            }}
          >
            <SharedElement id="image">
              <Image
                source={require('../../assets/images/tile-image-medium.png')}
                style={{ width: MediumCard.width, height: 130 }}
                resizeMode="contain"
              />
            </SharedElement>
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
          </MediumCard>
        ))}
      </ScrollView>
    </>
  );
};

const styles = {
  headerContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    //backgroundColor: 'hotpink',
    //height: 40,
    width: '100%',
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
