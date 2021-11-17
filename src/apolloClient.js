import { ApolloClient, InMemoryCache } from "@apollo/client";
import Key from './HasuraKey'

const client = new ApolloClient({
  uri: 'https://mirza-q.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': Key
  },
});

export default client