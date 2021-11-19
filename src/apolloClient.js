import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import Key from './HasuraKey'

const wsLink = new WebSocketLink({
  uri: "wss://mirza-q.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": Key
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: "https://mirza-q.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": Key
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client