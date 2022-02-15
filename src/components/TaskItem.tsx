import React from 'react';

import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {modifyStatus} from '../database/services/Task';

export type TaskItemProps = {
  id: string;
  title: string;
  completed: boolean;
  onAdd: () => void;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 8,
    marginBottom: 8,
    elevation: 4,
  },
  checkBox: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    marginRight: 8,
    borderColor: '#000000',
  },
  completed: {
    backgroundColor: '#50C878',
  },
  strikeText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});

const TaskItem = (props: TaskItemProps) => {
  const {title, id, completed, onAdd} = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        modifyStatus(id, !completed);
        onAdd();
      }}>
      <View style={styles.container}>
        <View style={[styles.checkBox, completed && styles.completed]} />
        <Text style={completed && styles.strikeText}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TaskItem;
