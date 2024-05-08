import { Answer } from "../types/DBTypes";
import answerModel from "../model/answerModel";
import { GraphQLError } from "graphql";

const answerResolver = {
  Query: {
    answers: async (): Promise<Answer[]> => {
      return await answerModel.find();
    },
    answer: async (
      _parent: undefined,
      args: { id: string }
    ): Promise<Answer | null> => {
      const answer = await answerModel.findById(args.id);
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
      const answer = await answerModel.create(args.body);
      if (!answer) {
        throw new GraphQLError("Error");
      } else {
        return answer;
      }
    },
  },
};

export default answerResolver;
