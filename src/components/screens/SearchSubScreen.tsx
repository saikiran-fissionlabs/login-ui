import * as React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
const SearchSubScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Search sub screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    marginBottom: 32,
    fontSize: 24,
  },
});

export default SearchSubScreen;
