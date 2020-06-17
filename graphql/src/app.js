import dotenv from 'dotenv';
import merge from 'lodash/merge';
import { ApolloServer } from 'apollo-server-express';
import { RedisCache } from 'apollo-redis-cache';
import express from 'express';
import helmet from 'helmet';
import consola from 'consola';

import * as news from '~/domains/news';

import NewsApi from '~/services/news';

dotenv.config();

const app = express();

app.use(helmet());

const Query = `
 type Query {
 _empty: String
}
`;

const Mutation = `
 type Mutation {
 _empty: String
}
`;

const resolvers = merge(
  news.resolvers,
);

const server = new ApolloServer({
  typeDefs: [
    Query,
    Mutation,
    news.schema,
  ],
  resolvers,
  onHealthCheck: () => true,
  cache: new RedisCache({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    maxRetriesPerRequest: 1,
  }),
  dataSources() {
    return {
      newsApi: new NewsApi(),
    };
  },
  cacheControl: true,
  engine: process.env.ENGINE_API_KEY,
  playground: process.env.PLAYGROUND_ENABLED === 'true',
  introspection: process.env.INTROSPECTION_ENABLED === 'true',
});

server.applyMiddleware({ app, path: '/gql', bodyParserConfig: { limit: '200kb' } });

app
  .listen({ port: process.env.PORT }, () => {
    // eslint-disable-next-line
    consola.log(`🚀  Server ready at ${server.graphqlPath}`);
  });
