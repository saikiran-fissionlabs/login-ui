import React from 'react';
import {StyleSheet, Text, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  heading: {
    marginHorizontal: 8,
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
});

const NotificationsScreen = () => {
  return <Text style={styles.heading}>Welcome to Notifications </Text>;
};

export default NotificationsScreen;
