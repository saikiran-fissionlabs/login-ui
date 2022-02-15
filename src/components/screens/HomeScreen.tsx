import * as React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to TODOs app</Text>
      <Button
        title="Goto my todos"
        onPress={() => {
          navigation.navigate('Todo');
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

export default HomeScreen;
