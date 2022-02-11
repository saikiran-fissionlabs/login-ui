import * as React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const AuthInput = ({...props}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#ffffff"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF40',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
  },
  input: {
    fontSize: 16,
    padding: 16,
    color: '#000000',
  },
});

export default AuthInput;
