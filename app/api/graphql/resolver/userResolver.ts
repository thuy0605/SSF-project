import { GraphQLError } from "graphql";
import { User, UserWithoutPasswordRole } from "../types/DBTypes";
import userModel from "../model/userModel";

const userResolver = {
  Query: {
    users: async (): Promise<UserWithoutPasswordRole[]> => {
      return await userModel.find();
    },
    user: async (
      _parent: undefined,
      args: { id: string }
    ): Promise<User | null> => {
      const user = await userModel.findById(args.id);
      if (!user) {
        throw new GraphQLError("User not found");
      }
      return user;
    },
  },
  Mutation: {
    createUser: async (
      _parent: undefined,
      args: { body: { username: string; password: string } }
    ): Promise<{ user: User; message: string }> => {
      console.log("createUser -> args", args);

      const user = await userModel.create(args.body);
      if (!user) {
        throw new GraphQLError("Error");
      } else {
        return { user, message: "User created" };
      }
    },
    loginUser: async (
      _parent: undefined,
      args: { credentials: { username: string; password: string } }
    ): Promise<{ user: User; message: string }> => {
      const user = await userModel.findOne({
        username: args.credentials.username,
        password: args.credentials.password,
      });
      if (!user) {
        throw new GraphQLError("Invalid credentials");
      }
      return { user, message: "Login successful" };
    },
  },
};

export default userResolver;
