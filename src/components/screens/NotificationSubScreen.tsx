import * as React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
const NotificationSubScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Notification sub screen</Text>
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

export default NotificationSubScreen;
