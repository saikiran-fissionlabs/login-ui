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

const SearchScreen = () => {
  return <Text style={styles.heading}>Welcome to Search </Text>;
};

export default SearchScreen;
