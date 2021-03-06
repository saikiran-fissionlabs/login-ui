import * as React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
const NotificationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Notification Screen</Text>
      <Button
        title="Goto my sub screen"
        onPress={() => {
          navigation.navigate('NotificationSubScreen');
        }}
      />
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

export default NotificationScreen;
