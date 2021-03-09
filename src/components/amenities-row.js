import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { AppText, TextStyles } from './app-text';

const AmenitiesRow = ({ bedroomCount, bathroomCount, buildingType }) => {
  return (
    <View style={styles.container}>
      <AppText>
        {bedroomCount && (
          <>
            <Icon
              name="bed"
              type="font-awesome"
              size={TextStyles.appText.fontSize}
              iconStyle={styles.iconStyle}
              containerStyle={{}}
            />
            {` ${bedroomCount}  `}
          </>
        )}
        {bathroomCount && (
          <>
            <Icon
              name="bath"
              type="font-awesome"
              size={TextStyles.appText.fontSize}
              iconStyle={styles.iconStyle}
              containerStyle={{}}
            />
            {` ${bathroomCount}   `}
          </>
        )}
        {buildingType && (
          <>
            <View
              style={{
                width: 1,
                height: TextStyles.appText.fontSize,
                backgroundColor: styles.iconStyle.color
              }}
            />
            {`   ${buildingType}`}
          </>
        )}
      </AppText>
    </View>
  );
};

const styles = {
  container: {
    paddingTop: 2
  },
  iconStyle: {
    color: 'grey',
    paddingLeft: 2
  }
};

export default AmenitiesRow;
