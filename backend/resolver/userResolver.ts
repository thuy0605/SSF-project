import { GraphQLError } from "graphql";
import { User, UserWithoutPasswordRole } from "../types/DBTypes";
import UserModel from "../model/userModel";

const userResolver = {
  Query: {
    users: async (): Promise<UserWithoutPasswordRole[]> => {
      return await UserModel.find();
    },
    user: async (
      _parent: undefined,
      args: { id: string }
    ): Promise<User | null> => {
      const user = await UserModel.findById(args.id);
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

      const user = await UserModel.create(args.body);
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
      const user = await UserModel.findOne({
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
