import * as React from 'react';
import {View, StyleSheet, Keyboard, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AuthInput from '../inputs/AuthInput';
import AuthButton from '../buttons/AuthButton';
import {createUser, getUser} from '../../database/services/User';
import AppContext from '../../contexts/AppContext';

const RegisterView = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cnfmPassword, setCnfmPassword] = React.useState('');
  const {setUser} = React.useContext(AppContext);

  const handleSubmit = async () => {
    const newEmail = email?.trim();
    const newPassword = password?.trim();
    const newCnfmPassword = cnfmPassword?.trim();

    if (!newEmail || !newPassword || !newCnfmPassword) {
      Alert.alert('Error', 'All filelds are required.');
      return;
    }

    if (newPassword !== newCnfmPassword) {
      Alert.alert('Error', 'Passwords should match');
      return;
    }

    const existingUser = await getUser(newEmail);

    if (existingUser?.email) {
      Alert.alert('Error', 'User already exist, please Login instead');
      return;
    }

    createUser(newEmail, newPassword).then(() => {
      Keyboard.dismiss();
      setUser({email: newEmail});
      navigation.navigate('App');
    });
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
        <AuthInput
          value={cnfmPassword}
          onChangeText={(val: string) => setCnfmPassword(val)}
          placeholder="Confirm Password"
          secureTextEntry
        />
      </View>
      <AuthButton title="Register" color="#F00" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default RegisterView;
