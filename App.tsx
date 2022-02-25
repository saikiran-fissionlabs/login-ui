import * as React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import AppContainer from './src/components/elements/AppContainer';

import {SafeAreaProvider} from 'react-native-safe-area-view';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <AppContainer />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
