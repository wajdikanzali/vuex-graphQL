import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:5000/gql';
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: httpEndpoint,
});

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

// Install the vue plugin
Vue.use(VueApollo);

export default apolloProvider;
