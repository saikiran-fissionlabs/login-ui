const UserSchema = {
  name: 'User',
  properties: {
    email: 'string',
    password: 'string',
  },
  primaryKey: 'email',
};

export default UserSchema;
