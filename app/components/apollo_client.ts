import { ApolloClient, InMemoryCache } from "@apollo/client";
import e from "express";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT ?? "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
