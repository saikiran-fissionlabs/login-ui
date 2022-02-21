import realm from '../realm';

export const createUser = async (email: string, password: string) => {
  const realmInstance = await realm;
  realmInstance.write(() => {
    realmInstance.create('User', {
      email: email,
      password: password,
    });
  });
};

export const getUser = async (email: string) => {
  const realmInstance = await realm;
  const user = realmInstance.objectForPrimaryKey('User', email);
  return user;
};
