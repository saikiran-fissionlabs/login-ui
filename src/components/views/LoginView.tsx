import * as React from 'react';
import {View, StyleSheet, Keyboard, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AuthInput from '../inputs/AuthInput';
import AuthButton from '../buttons/AuthButton';
import {getUser} from '../../database/services/User';
import AppContext from '../../contexts/AppContext';

const LoginView = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {setUser} = React.useContext(AppContext);

  const handleSubmit = async () => {
    const newEmail = email?.trim();
    const newPassword = password?.trim();

    if (!newEmail || !newPassword) {
      Alert.alert('Error', 'All filelds are required.');
      return;
    }

    const existingUser = await getUser(newEmail);

    if (!existingUser?.email || existingUser?.password !== newPassword) {
      Alert.alert('Error', 'User not exists or Invalid Credentials');
      return;
    }

    Keyboard.dismiss();
    setUser({email: newEmail});
    navigation.navigate('App');
  };

  return (
    <View>
      <View style={styles.container}>
        <AuthInput
          value={email}
          onChangeText={(val: string) => setEmail(val)}
          placeholder="Email Address"
        />
        <AuthInput
          value={password}
          onChangeText={(val: string) => setPassword(val)}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <AuthButton title="Login" color="#F00" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default LoginView;
