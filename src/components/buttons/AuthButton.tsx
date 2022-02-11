import * as React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

type AuthButtonPropType = {
  title: string;
  onPress?: () => void;
  color: string;
};

const AuthButton = ({title, onPress, color}: AuthButtonPropType) => {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AuthButton;
