import React, {useContext} from 'react';
import {
  Button,
  FlatList,
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TaskItem, {TaskItemProps} from '../../components/TaskItem';
import AppContext from '../../contexts/AppContext';
import {createTask, getTasks} from '../../database/services/Task';

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
    fontSize: 18,
    padding: 16,
  },
  heading: {
    marginHorizontal: 8,
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  button: {
    marginHorizontal: 8,
    marginTop: 16,
    marginBottom: 16,
  },
});

const TodoScreen = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [task, setTask] = React.useState('');
  const {user} = useContext(AppContext);

  const fetchTasks = async () => {
    const tasks = await getTasks(user?.email);
    setTodoList(tasks);
  };

  React.useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      <Text style={styles.heading}>TODO List </Text>
      <View style={styles.button}>
        <TextInput
          value={task}
          style={styles.input}
          placeholder="Enter a task"
          onChangeText={(val: string) => {
            setTask(val);
          }}
        />
        <Button
          title="Add"
          onPress={async () => {
            if (!task) {
              return;
            }
            await createTask(task, user?.email);
            setTask('');
            fetchTasks();
          }}
        />
      </View>
      <FlatList
        data={todoList}
        keyExtractor={(item: TaskItemProps) => item.id}
        renderItem={({item}: {item: TaskItemProps}) => {
          return (
            <TaskItem
              id={item.id}
              completed={item.completed}
              title={item.title}
              onAdd={fetchTasks}
            />
          );
        }}
      />
    </>
  );
};

export default TodoScreen;
