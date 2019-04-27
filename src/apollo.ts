import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  // graphQL endpoint
  uri: "http://localhost:4000/graphql"
});

export default client;
