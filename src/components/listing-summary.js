import React from 'react';
import { View, Text } from 'react-native';
import { AppText, TextStyles } from '../components/app-text';
import AmenitiesRow from '../components/amenities-row';
import { capitaliseFirstLetter, capitaliseWords } from '../lib/utils';

const ListingSummary = ({
  address,
  saleType = '',
  bedroomCount = 0,
  bathroomCount = 0,
  buildingType = '',
  style = styles.container,
  addressStyle = TextStyles.appHeader3Text
}) => {
  return (
    <View
      style={style}
    >
      <Text
        style={addressStyle}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {capitaliseWords(address)}
      </Text>
      <AppText>{capitaliseFirstLetter(saleType)}</AppText>
      <AmenitiesRow
        bedroomCount={bedroomCount}
        bathroomCount={bathroomCount}
        buildingType={capitaliseFirstLetter(buildingType)}
      />
    </View>
  );
};

const styles = {
  container: {
    paddingLeft: 10
  }
};

export default ListingSummary;
