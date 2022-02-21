import Realm from 'realm';

import TaskSchema from './models/Task';
import UserSchema from './models/User';

const realm = Realm.open({
  path: 'myrealm',
  schema: [TaskSchema, UserSchema],
  deleteRealmIfMigrationNeeded: true,
});

export default realm;
