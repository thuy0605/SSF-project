import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";

// import typeDefs from "./schema/index";
import questionResolver from "./resolver/questionResolver";
import userResolver from "./resolver/userResolver";
import answerResolver from "./resolver/answerResolver";

import gql from "graphql-tag";

const typeDefs = gql`
  type Answer {
    id: ID
    answer: String
  }

  type Question {
    id: ID
    question: String
    owner: ID
    answer: String
  }

  type User {
    id: ID
    username: String
    password: String
  }

  type UserResponse {
    user: User
    message: String
  }

  type LoginResponse {
    message: String
    user: User
  }

  input UserInput {
    username: String!
    password: String!
  }

  input QuestionInput {
    question: String!
    owner: ID!
  }

  input QuestionUpdateInput {
    answer: ID
  }

  input AnswerInput {
    answer: String!
    question: String!
  }

  input Credentials {
    username: String!
    password: String!
  }

  type Query {
    questions: [Question]
    question(id: ID!): Question
    questionByOwner(owner: ID!): [Question]
    answers: [Answer]
    answer(id: ID!): Answer
    users: [User]
    user(id: ID!): User
    checkToken: UserResponse
  }

  type Mutation {
    updateQuestion(body: QuestionUpdateInput, id: ID!): Question
    createQuestion(body: QuestionInput): Question
    createAnswer(body: AnswerInput): Answer
    createUser(body: UserInput): UserResponse
    loginUser(credentials: Credentials): LoginResponse
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: [questionResolver, userResolver, answerResolver],
});

// Typescript: req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
