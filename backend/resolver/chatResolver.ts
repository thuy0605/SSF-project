import { Chat } from "../types/DBTypes";
import ChatModel from "../model/chatModel";
import { GraphQLError } from "graphql";

const chatResolver = {
  Query: {
    getQuestions: async (): Promise<Chat[]> => {
      return await ChatModel.find();
    },
    getQuestion: async (
      _parent: undefined,
      args: { id: string }
    ): Promise<Chat | null> => {
      const question = await ChatModel.findById(args.id);
      if (!question) {
        throw new GraphQLError("Chat not found");
      }
      return question;
    },
    Mutation: {
      createQuestion: async (
        _parent: undefined,
        args: { question: Omit<Chat, "_id"> }
      ): Promise<{ message: string; question?: Chat }> => {
        const question = await ChatModel.create(args.question);
        if (!question) {
          throw new GraphQLError("Error");
        } else {
          return { message: "Chat added successfully", question };
        }
      },
    },
  },
};

export default chatResolver;
