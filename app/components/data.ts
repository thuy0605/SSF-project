import { useQuery, gql } from "@apollo/client";

export const GET_QUESTIONS = gql`
  query {
    questions {
      id
      question
    }
  }
`;
export function useFetch() {
  return useQuery(GET_QUESTIONS);
}

// const data = [
//   {
//     id: 1,
//     message: "Hello, how can I help you?",
//   },
//   {
//     id: 2,
//     message: "I have a question about my order",
//   },
//   {
//     id: 3,
//     message: "I lost my password, can you help me?",
//   },
//   {
//     id: 4,
//     message: "I live in the UK, can you deliver to me?",
//   },
//   {
//     id: 5,
//     message: "I have a meeting with the team, can you help me with the agenda?",
//   },
// ];
