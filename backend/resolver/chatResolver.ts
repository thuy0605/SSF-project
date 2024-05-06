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
    questionByOwner: async (
      _parent: undefined,
      args: { owner: string }
    ): Promise<Question[]> => {
      return await ChatModel.find({ owner: args.owner });
    },
  },
  Mutation: {
    updateQuestion: async (
      _parent: undefined,
      args: {
        body: { answer: string };
        id: string;
      }
    ): Promise<Question> => {
      const question = await ChatModel.findByIdAndUpdate(
        args.id,
        { answer: args.body.answer },
        {
          new: true,
        }
      );

      if (!question) {
        throw new GraphQLError("Error");
      } else {
        return question;
      }
    },
    createQuestion: async (
      _parent: undefined,
      args: { body: { question: string; owner: string } }
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
