import { Question } from "../types/DBTypes";
import ChatModel from "../model/chatModel";
import { GraphQLError } from "graphql";

const chatResolver = {
  Query: {
    questions: async (): Promise<Question[]> => {
      return await ChatModel.find();
    },
    question: async (
      _parent: undefined,
      args: { id: string }
    ): Promise<Question | null> => {
      const question = await ChatModel.findById(args.id);
      if (!question) {
        throw new GraphQLError("Chat not found");
      }
      return question;
    },
  },
  Mutation: {
    createQuestion: async (
      _parent: undefined,
      args: { body: String }
    ): Promise<Question> => {
      const question = await ChatModel.create(args.body);
      if (!question) {
        throw new GraphQLError("Error");
      } else {
        return question;
      }
    },
  },
};

export default chatResolver;
