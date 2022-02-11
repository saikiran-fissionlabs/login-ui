import * as React from 'react';
import {Text, View, StyleSheet, TextInput, ImageBackground} from 'react-native';

import LoginView from '../views/LoginView';
import AuthButton from '../buttons/AuthButton';
import AuthSelector from '../selectors/AuthSelector';
import RegisterView from '../views/RegisterView';

import authBgImage from '../../assets/images/AuthBg.jpeg';

const AuthScreen = () => {
  const [authType, setAuthType] = React.useState('login');
  const isLogin = authType === 'login';

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={authBgImage}
        style={styles.bgImage}>
        <View style={styles.logoContainer} />
        <View style={styles.inputContainer}>
          <AuthSelector
            value={authType}
            onChange={(type: string) => setAuthType(type)}
          />
        </View>
        {isLogin ? <LoginView /> : <RegisterView />}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 16,
  },
  logoContainer: {
    flex: 1,
  },
});

export default AuthScreen;
