import React from 'react';
import { View, ScrollView } from 'react-native';
import { AppText, AppHeader2Text, TextStyles } from '../components/app-text';
import TouchableScale from 'react-native-touchable-scale';
import { Styles } from '../shared-styles';
import { FILTER_TYPES } from '../shared-strings';
import { Icon } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';

const filterTypeRightIcons = {
  [FILTER_TYPES.SALE_TYPE]: { name: 'chevron-down', type: 'feather' },
  [FILTER_TYPES.PRICE_RANGE]: { name: 'chevron-down', type: 'feather' },
  [FILTER_TYPES.OPEN_HOME]: { name: 'close-circle', type: 'material-community' },
};

const FilterPanel = ({ filters, onFiltersChange }) => {
  const { navigate } = useNavigation();
  return (
    <View style={{ height: 40 }}>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingLeft: 30, paddingRight: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{ flexDirection:'row', alignItems: 'center' }}
        >
          {filters.map((filter) => {
            const text = filter.description || filter.value;
            return (
              <TouchableScale
                key={text}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  height: 40, borderRadius: 20,
                  paddingHorizontal: 10,
                  marginRight: 10
                }}
                onPress={() => {
                  navigate('Modal');
                }}
              >
                <AppText>{text}</AppText>
                <Icon
                  style={{ paddingLeft: 5 }}
                  color="grey"
                  name={filterTypeRightIcons[filter.type].name}
                  type={filterTypeRightIcons[filter.type].type}
                />
              </TouchableScale>
            );
          })}


        </View>

      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default FilterPanel;
