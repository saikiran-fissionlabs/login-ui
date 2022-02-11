import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import AuthScreen from './src/components/screens/AuthScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
