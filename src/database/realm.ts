import Realm from 'realm';

import TaskSchema from './models/Task';

const realm = Realm.open({
  path: 'myrealm',
  schema: [TaskSchema],
  deleteRealmIfMigrationNeeded: true,
});

export default realm;
