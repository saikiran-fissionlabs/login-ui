const TaskSchema = {
  name: 'Task',
  properties: {
    id: 'string',
    title: 'string',
    completed: 'bool',
  },
  primaryKey: 'id',
};

export default TaskSchema;
