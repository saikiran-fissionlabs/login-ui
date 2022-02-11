import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import AuthInput from '../inputs/AuthInput';
import AuthButton from '../buttons/AuthButton';

const LoginView = () => {
  return (
    <View>
      <View style={styles.container}>
        <AuthInput placeholder="Email Address" />
        <AuthInput placeholder="Password" secureTextEntry />
      </View>
      <AuthButton title="Login" color="#F00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default LoginView;
