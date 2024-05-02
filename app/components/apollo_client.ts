import { ApolloClient, InMemoryCache } from "@apollo/client";
import e from "express";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

export default client;
