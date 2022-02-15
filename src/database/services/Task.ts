import realm from '../realm';

export const createTask = async (title: string) => {
  const realmInstance = await realm;
  realmInstance.write(() => {
    realmInstance.create('Task', {
      id: Date.now().toString(),
      title: title,
      completed: false,
    });
  });
};

export const getTasks = async () => {
  const realmInstance = await realm;
  const tasks = realmInstance.objects('Task');
  return tasks;
};

export const modifyStatus = async (id: string, completed: boolean) => {
  const realmInstance = await realm;
  const task = realmInstance.objectForPrimaryKey('Task', id);

  realmInstance.write(() => {
    task.completed = completed;
  });
};
