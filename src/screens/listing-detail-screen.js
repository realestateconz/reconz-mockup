import React from 'react';
import { View, Text, Dimensions, SafeAreaView, StyleSheet, Image, Platform, StatusBar } from 'react-native';
import { Button, Icon, Header } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import { SharedElement } from 'react-navigation-shared-element';
import { onScrollEvent, useValues } from 'react-native-redash/lib/module/v1';
import TouchableScale from 'react-native-touchable-scale';
import Animated, {
  useCode, block, lessThan, cond, set, call, greaterThan, interpolateColors
} from 'react-native-reanimated';
import { SpringScrollView } from 'react-native-spring-scrollview';
import ListingSummary from '../components/listing-summary';
import { AppHeader2Text, TextStyles } from '../components/app-text';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';

const AnimatedScrollView = Platform.OS === 'ios'
  ? Animated.ScrollView
  : Animated.createAnimatedComponent(SpringScrollView);
const { width, height } = Dimensions.get('window');

const imageHeight = height * 0.6;
const PULL_DOWN_TRIGGER_VALUE = 100;

const ListingDetailScreen = (props) => {
  const { goBack, getParam } = useNavigation();
  const [scrollY, backTriggered, headerOpacity, headerOpacityTriggered] = useValues(0, 0, 0, 0);
  useCode(() =>
    block([
      cond(
        lessThan(scrollY, -PULL_DOWN_TRIGGER_VALUE),
        set(backTriggered, 1)
      ),
      cond(
        backTriggered,
        call([], () => {
          goBack();
        })
      ),
      cond(
        greaterThan(scrollY, imageHeight),
        set(headerOpacityTriggered, 1),
        set(headerOpacityTriggered, 0)
      ),
      cond(
        headerOpacityTriggered,
        set(headerOpacity, 1),
        set(headerOpacity, 0)
      )
    ]),
  [scrollY, backTriggered]
  );

  const headerBackgroundColor = interpolateColors(scrollY,{
    inputRange: [0,imageHeight * 0.8, imageHeight],
    outputColorRange: ['rgba(255,255,255,0)','rgba(255,255,255,0)','rgba(255,255,255,0.9)'],
    extrapolate: 'clamp'
  });

  const scale = scrollY.interpolate({
    inputRange: [-PULL_DOWN_TRIGGER_VALUE,0],
    outputRange: [0.75, 1],
    extrapolate: 'clamp'
  });
  const borderRadius = scrollY.interpolate({
    inputRange: [-PULL_DOWN_TRIGGER_VALUE,0],
    outputRange: [15, 0],
    extrapolate: 'clamp'
  });
  const closeButtonOpacity = scrollY.interpolate({
    inputRange: [-20,0],
    outputRange: [0,1],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <AnimatedScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll = {onScrollEvent({ y: scrollY })}
        style={{
          ...styles.overlay,
          transform: [{ scale:scale }],
          borderRadius,
        }}
        contentContainerStyle={{
          backgroundColor: 'white',
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}
      >
        <Animated.View>
          <SharedElement id={getParam('sharedElementId')}>
            <Image
              source={require('../../assets/images/tile-image-medium.png')}
              style={{
                width,
                height: imageHeight,
                resizeMode: 'cover',
              }}
            />
          </SharedElement>
          <ListingSummary
            style={styles.cardTextContainer}
            addressStyle={TextStyles.appHeader1Text}
            address={'324 Remuera Rd, Remuera, Auckland'}
            saleType={'Negotiation'}
            bedroomCount={4}
            bathroomCount={3}
            buildingType="House"
          />
          <View style={styles.content}>
            <View style={styles.separator}/>
            <AppHeader2Text>Property Details</AppHeader2Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a massa vulputate, convallis augue eget, volutpat nisl. Fusce quam arcu, tincidunt et orci eget, efficitur finibus erat. Ut ut mollis lacus, vel semper magna. Proin a tempus dolor, vitae vestibulum tellus. Mauris sit amet elementum ex. Curabitur ultricies congue urna, quis dignissim risus auctor ultricies. Ut at magna non magna elementum mattis in at ex. Duis lorem arcu, aliquet quis dignissim eu, gravida quis tortor. Sed porttitor fermentum sem, elementum dapibus felis suscipit nec. Fusce nisi mi, aliquam gravida efficitur vel, vestibulum nec lorem.</Text>
            <Text>Proin eu semper lectus. Quisque egestas dignissim tellus, volutpat hendrerit turpis aliquam id. Etiam non efficitur ipsum. Pellentesque dignissim est at suscipit feugiat. Nullam ultricies suscipit tempor. Vestibulum vitae metus nec metus interdum bibendum id ac velit. Proin non ultricies quam. Morbi volutpat elit vel metus mattis, ut finibus mi sollicitudin. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam laoreet nec ante sed eleifend. Quisque non ligula tempus, volutpat urna in, pulvinar felis. Proin arcu mauris, viverra vitae interdum vitae, pretium non erat.</Text>
            <Text>Vestibulum at turpis eget elit fringilla aliquet et vitae lectus. Fusce nisl elit, pretium sit amet auctor in, aliquam vitae velit. Vivamus risus metus, mollis quis tortor ut, ullamcorper finibus magna. Sed facilisis tellus justo. Praesent lacinia a justo non pellentesque. Vivamus eget auctor magna. Suspendisse molestie diam id erat pulvinar eleifend. Fusce laoreet diam non eros congue fermentum. Suspendisse potenti. Aliquam erat volutpat. Donec scelerisque consequat arcu, ac dapibus magna suscipit sit amet. Morbi sit amet odio ac purus imperdiet ornare at sed dui. Fusce diam lorem, malesuada at molestie nec, ornare vel dolor.</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a massa vulputate, convallis augue eget, volutpat nisl. Fusce quam arcu, tincidunt et orci eget, efficitur finibus erat. Ut ut mollis lacus, vel semper magna. Proin a tempus dolor, vitae vestibulum tellus. Mauris sit amet elementum ex. Curabitur ultricies congue urna, quis dignissim risus auctor ultricies. Ut at magna non magna elementum mattis in at ex. Duis lorem arcu, aliquet quis dignissim eu, gravida quis tortor. Sed porttitor fermentum sem, elementum dapibus felis suscipit nec. Fusce nisi mi, aliquam gravida efficitur vel, vestibulum nec lorem.</Text>
            <Text>Proin eu semper lectus. Quisque egestas dignissim tellus, volutpat hendrerit turpis aliquam id. Etiam non efficitur ipsum. Pellentesque dignissim est at suscipit feugiat. Nullam ultricies suscipit tempor. Vestibulum vitae metus nec metus interdum bibendum id ac velit. Proin non ultricies quam. Morbi volutpat elit vel metus mattis, ut finibus mi sollicitudin. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam laoreet nec ante sed eleifend. Quisque non ligula tempus, volutpat urna in, pulvinar felis. Proin arcu mauris, viverra vitae interdum vitae, pretium non erat.</Text>
            <Text>Vestibulum at turpis eget elit fringilla aliquet et vitae lectus. Fusce nisl elit, pretium sit amet auctor in, aliquam vitae velit. Vivamus risus metus, mollis quis tortor ut, ullamcorper finibus magna. Sed facilisis tellus justo. Praesent lacinia a justo non pellentesque. Vivamus eget auctor magna. Suspendisse molestie diam id erat pulvinar eleifend. Fusce laoreet diam non eros congue fermentum. Suspendisse potenti. Aliquam erat volutpat. Donec scelerisque consequat arcu, ac dapibus magna suscipit sit amet. Morbi sit amet odio ac purus imperdiet ornare at sed dui. Fusce diam lorem, malesuada at molestie nec, ornare vel dolor.</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a massa vulputate, convallis augue eget, volutpat nisl. Fusce quam arcu, tincidunt et orci eget, efficitur finibus erat. Ut ut mollis lacus, vel semper magna. Proin a tempus dolor, vitae vestibulum tellus. Mauris sit amet elementum ex. Curabitur ultricies congue urna, quis dignissim risus auctor ultricies. Ut at magna non magna elementum mattis in at ex. Duis lorem arcu, aliquet quis dignissim eu, gravida quis tortor. Sed porttitor fermentum sem, elementum dapibus felis suscipit nec. Fusce nisi mi, aliquam gravida efficitur vel, vestibulum nec lorem.</Text>
            <Text>Proin eu semper lectus. Quisque egestas dignissim tellus, volutpat hendrerit turpis aliquam id. Etiam non efficitur ipsum. Pellentesque dignissim est at suscipit feugiat. Nullam ultricies suscipit tempor. Vestibulum vitae metus nec metus interdum bibendum id ac velit. Proin non ultricies quam. Morbi volutpat elit vel metus mattis, ut finibus mi sollicitudin. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam laoreet nec ante sed eleifend. Quisque non ligula tempus, volutpat urna in, pulvinar felis. Proin arcu mauris, viverra vitae interdum vitae, pretium non erat.</Text>
            <Text>Vestibulum at turpis eget elit fringilla aliquet et vitae lectus. Fusce nisl elit, pretium sit amet auctor in, aliquam vitae velit. Vivamus risus metus, mollis quis tortor ut, ullamcorper finibus magna. Sed facilisis tellus justo. Praesent lacinia a justo non pellentesque. Vivamus eget auctor magna. Suspendisse molestie diam id erat pulvinar eleifend. Fusce laoreet diam non eros congue fermentum. Suspendisse potenti. Aliquam erat volutpat. Donec scelerisque consequat arcu, ac dapibus magna suscipit sit amet. Morbi sit amet odio ac purus imperdiet ornare at sed dui. Fusce diam lorem, malesuada at molestie nec, ornare vel dolor.</Text>
          </View>

        </Animated.View>

      </AnimatedScrollView>
      <Animated.View
        style={{ ...styles.overlay }}
        pointerEvents="box-none"
      >
        <Header
          containerStyle={{
            backgroundColor: headerBackgroundColor,
            borderBottomWidth: 0,
            opacity: closeButtonOpacity
          }}
          ViewComponent={Animated.View}
          statusBarProps={{
            translucent: true,
            backgroundColor:'rgba(0,0,0,0)',
            barStyle:'dark-content'
          }}
          leftComponent={
            <Icon
              name="x"
              type="feather"
              color="grey"
              onPress={()=>{
                goBack();
              }}
              Component={TouchableScale}
            />
          }
          rightComponent={
            <View
              style={{ flexDirection: 'row', width: 70, justifyContent: 'space-between' }}
            >
              <Icon
                name="share"
                type="feather"
                color="grey"
                onPress={()=>{
                  console.log('!!! Share pressed');
                }}
                Component={TouchableScale}
              />
              <Icon
                name="star"
                type="feather"
                color="grey"
                onPress={()=>{
                  console.log('!!! Star pressed');
                }}
                Component={TouchableScale}
              />
            </View>
          }
        />
        {/* <SafeAreaView
        pointerEvents="box-none"
        style={{
          ...styles.overlay,
          //alignItems: 'flex-end',
          margin: 20
        }}
      > */}

        {/* </SafeAreaView> */}
      </Animated.View>


    </View>
  );
};

ListingDetailScreen.sharedElements = (navigation, otherNavigation, showing) => {
  return [navigation.getParam('sharedElementId')];
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFill
  },
  content: {
    marginHorizontal: 10,
  },
  separator: {
    backgroundColor: 'lightgrey',
    height: 1,
    marginVertical: 20
  }
};

export default ListingDetailScreen;
