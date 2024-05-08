import { Question } from "../types/DBTypes";
import questionModel from "../model/questionModel";
import { GraphQLError } from "graphql";
import openai from "openai";

const openaiAPIKey = process.env.OPENAI_API_KEY;
if (!openaiAPIKey) {
  throw new Error("OPENAI_API_KEY is not defined");
}

const openaiClient = new openai.OpenAI({
  apiKey: openaiAPIKey,
});

const chatResolver = {
  Query: {
    questions: async (): Promise<Question[]> => {
      return await questionModel.find();
    },
    question: async (
      _parent: undefined,
      args: { id: string }
    ): Promise<Question | null> => {
      const question = await questionModel.findById(args.id);
      if (!question) {
        throw new GraphQLError("Chat not found");
      }
      return question;
    },
    questionByOwner: async (
      _parent: undefined,
      args: { owner: string }
    ): Promise<Question[]> => {
      return await questionModel.find({ owner: args.owner });
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
      const question = await questionModel.findByIdAndUpdate(
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
      try {
        // Send the question to OpenAI's ChatGPT model for generating the answer
        const response = await openaiClient.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: `User: ${args.body.question}` },
          ],
        });

        // Extract the response from OpenAI
        const answer = response.choices[0].message.content;
        console.log("answer from AI", answer);

        // Create the question in the database
        const question = await questionModel.create({
          question: args.body.question,
          owner: args.body.owner,
          answer: answer,
        });

        if (!question) {
          throw new GraphQLError("Error");
        } else {
          return question;
        }
      } catch (error) {
        console.error("Error in createQuestion", error);
        throw new GraphQLError("Error");
      }
    },
  },
};

export default chatResolver;
