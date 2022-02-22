import realm from '../realm';

export const createTask = async (title: string, email: string) => {
  const realmInstance = await realm;
  realmInstance.write(() => {
    realmInstance.create('Task', {
      id: Date.now().toString(),
      title: title,
      completed: false,
      userEmail: email,
    });
  });
};

export const getTasks = async (email: string) => {
  const realmInstance = await realm;
  const tasks = realmInstance.objects('Task');
  const userTasks = tasks.filtered('userEmail == $0', email);
  return userTasks;
};

export const modifyStatus = async (id: string, completed: boolean) => {
  const realmInstance = await realm;
  const task = realmInstance.objectForPrimaryKey('Task', id);

  realmInstance.write(() => {
    task.completed = completed;
  });
};
