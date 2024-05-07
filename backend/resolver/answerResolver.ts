import { Answer } from "../types/DBTypes";
import AnswerModel from "../model/answerModel";
import { GraphQLError } from "graphql";

const answerResolver = {
  Query: {
    answers: async (): Promise<Answer[]> => {
      return await AnswerModel.find();
    },
    answer: async (
      _parent: undefined,
      args: { id: string }
    ): Promise<Answer | null> => {
      const answer = await AnswerModel.findById(args.id);
      if (!answer) {
        throw new GraphQLError("Answer not found");
      }
      return answer;
    },
  },
  Mutation: {
    createAnswer: async (
      _parent: undefined,
      args: { body: { answer: string; question: string } }
    ): Promise<Answer> => {
      const answer = await AnswerModel.create(args.body);
      if (!answer) {
        throw new GraphQLError("Error");
      } else {
        return answer;
      }
    },
  },
};

export default answerResolver;
