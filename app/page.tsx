"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Register from "./(components)/register";

export default function Home() {
  const graphqlEndpoint =
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ??
    "http://localhost:3000/api/graphql";

  const client = new ApolloClient({
    uri: graphqlEndpoint,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Register />
      {/* <Login /> */}
    </ApolloProvider>
  );
}
