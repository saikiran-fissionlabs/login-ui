import * as React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import AppContainer from './src/components/elements/AppContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
