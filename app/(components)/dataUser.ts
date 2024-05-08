import e from "express";
import { useQuery, gql } from "@apollo/client";
export const GET_USERS = gql`
  query {
    users {
      id
      username
      password
    }
  }
`;
export function useFetch() {
  return useQuery(GET_USERS);
}
