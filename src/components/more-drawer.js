import React from 'react';
import { ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { DrawerItems } from 'react-navigation-drawer';

const MoreDrawer = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = {
  container: {
    flex: 1,
  },
};

export default MoreDrawer;
