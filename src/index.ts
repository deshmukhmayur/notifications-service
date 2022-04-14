import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import schemas from './schemas';
import Users from './models/User.model';
import Notifications from './models/Notification.model';
import Subscriptions from './models/Subscription.model';
import SubscriberMaps from './models/SubscriberMap.model';

import database from './setup/database';
import { PORT } from './setup/env';

(async () => {
  await database();
})()

const server = new ApolloServer({
  context: {
    Users,
    Notifications,
    Subscriptions,
    SubscriberMaps,
  },
  typeDefs: schemas,
  resolvers: resolvers,
});

server.listen(PORT).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
