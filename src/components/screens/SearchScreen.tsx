import * as React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Search Screen</Text>
      <Button
        title="Goto my sub screen"
        onPress={() => {
          navigation.navigate('SearchSubScreen');
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

export default SearchScreen;
