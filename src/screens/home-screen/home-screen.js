import React, { useState } from 'react';
import { SafeAreaView, LayoutAnimation, ScrollView } from 'react-native';
import FocusAwareStatusBar from '../../components/focus-aware-status-bar';
import GreetingPanel from './greeting-panel';
import NearYouPanel from './near-you-panel';
import Carousel from '../../components/carousel';

const HomeScreen = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const onLogin = (login) => {
    LayoutAnimation.easeInEaseOut();
    setLoggedIn(login);
  };

  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          ...styles.container,
        }}>
        <GreetingPanel loggedIn={loggedIn} onLogin={onLogin}/>
        <ScrollView
          style={styles.content}
        >
          {!loggedIn && (
            <NearYouPanel/>
          )}

          <Carousel
            title="Latest from previous search"
            rightButtonText="See all"
            sharedElementIdPrefix="recent"
          />

          {loggedIn && (
            <Carousel
              title="Recommendations just for you"
              rightButtonText="View all"
              sharedElementIdPrefix="recommended"
            />
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'whitesmoke'
  }
};

export default HomeScreen;
