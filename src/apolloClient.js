import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://mirza-q.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': 'G9jXvAVJcNOVltoie6EL7P0pSxY88Ux5MDzcBDPH0THR9myH9eQjadzSG5v4hmi6'
  },
});

export default client