import React from 'react';
import { View, TouchableWithoutFeedback, Text, SafeAreaView } from 'react-native';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import { AppHeader1Text, AppText, TextStyles } from '../components/app-text';
import TouchableScale from 'react-native-touchable-scale';
import { Button } from 'react-native-elements';
import { FILTER_TYPES, FILTER_DIALOG_STRINGS } from '../shared-strings';
// const initialCurrentFilters = [
//   { value: 'Residential for sale', type: FILTER_TYPES.SALE_TYPE },
//   { value: { lower: 500000, upper: 1500000 }, description: '$500k - $1.5M', type: FILTER_TYPES.PRICE_RANGE },
//   { value: 'Open home', type: FILTER_TYPES.OPEN_HOME },
// ];

// const FilterDialogComponents = {
//   [FILTER_TYPES.SALE_TYPE]: SaleTypeSelector,
//   [FILTER_TYPES.PRICE_RANGE]: PriceRangeSelector,
//   [FILTER_TYPES.OPEN_HOME]: OpenHomeSelector,
// };

const FilterModalScreen = (props) => {
  const { goBack } = useNavigation();
  const filter = useNavigationParam('filter');
  const { title } = FILTER_DIALOG_STRINGS[filter.type];

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPressIn={()=>{
          goBack();
        }}
      >
        <View style={styles.spacer}/>
      </TouchableWithoutFeedback>
      <SafeAreaView style={styles.content}>
        <View style={styles.headerRow}>
          <View style={styles.headerRowLeft}>
            <AppHeader1Text>{`${title} `}</AppHeader1Text>
            <AppText>
              <Text style={styles.countText}>
                (345 listings)
              </Text>
            </AppText>
          </View>
          <View style={styles.headerRowRight}>
            <Button
              title="Reset"
              titleStyle={styles.buttonText}
              buttonStyle={styles.button}
              type="clear"
            />
            <Button
              title="Cancel"
              titleStyle={styles.buttonText}
              buttonStyle={styles.button}
              type="clear"
              onPress={()=>{
                goBack();
              }}
            />
            <Button
              title="Apply"
              titleStyle={styles.buttonText}
              buttonStyle={styles.button}
              type="clear"
            />

          </View>
        </View>


      </SafeAreaView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  spacer: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,
    paddingBottom: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  headerRowLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  headerRowRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: 20,
    justifyContent: 'flex-end'
  },
  button: {
    paddingVertical: 0
  },
  buttonText: {
    ...TextStyles.appText,
    color: 'grey'
  },
  countText: {
    fontSize: 14
  }
};

export default FilterModalScreen;
