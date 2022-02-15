import * as React from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AuthInput from '../inputs/AuthInput';
import AuthButton from '../buttons/AuthButton';

const RegisterView = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <AuthInput placeholder="Email Address" />
        <AuthInput placeholder="Password" secureTextEntry />
        <AuthInput placeholder="Confirm Password" secureTextEntry />
      </View>
      <AuthButton
        title="Register"
        color="#F00"
        onPress={() => {
          Keyboard.dismiss();
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default RegisterView;
