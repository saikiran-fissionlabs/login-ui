import * as React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

type AuthSelectorPropType = {
  value: string;
  onChange: (type: string) => void;
};

const AuthSelector = ({value, onChange}: AuthSelectorPropType) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          value === 'login' && {
            borderColor: '#F00',
            borderBottomWidth: 4,
            marginRight: 116,
          },
          styles.item,
        ]}>
        <TouchableWithoutFeedback onPress={() => onChange('login')}>
          <Text style={styles.title}>Login</Text>
        </TouchableWithoutFeedback>
      </View>
      <View
        style={[
          value === 'register' && {
            borderColor: '#F00',
            borderBottomWidth: 4,
            marginRight: 116,
          },
          styles.item,
        ]}>
        <TouchableWithoutFeedback onPress={() => onChange('register')}>
          <Text style={styles.title}>Register</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 16,
  },
  item: {
    marginRight: 16,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
});

export default AuthSelector;
