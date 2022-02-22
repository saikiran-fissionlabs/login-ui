const TaskSchema = {
  name: 'Task',
  properties: {
    id: 'string',
    title: 'string',
    completed: 'bool',
    userEmail: 'string',
  },
  primaryKey: 'id',
};

export default TaskSchema;
