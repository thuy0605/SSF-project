import { useQuery, gql } from "@apollo/client";

export const GET_QUESTIONS = gql`
  query {
    questions {
      id
      question
      answer
      owner
    }
  }
`;

export function useFetch() {
  return useQuery(GET_QUESTIONS);
}
