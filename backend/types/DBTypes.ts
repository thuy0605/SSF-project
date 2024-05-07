import mongoose, { Document } from "mongoose";

type Question = {
  _id: mongoose.Types.ObjectId;
  id?: mongoose.Types.ObjectId;
  question: string;
  owner: mongoose.Types.ObjectId;
  answer: string;
};

type Answer = {
  _id: mongoose.Types.ObjectId;
  id?: mongoose.Types.ObjectId;
  answer: string;
};

type User = Partial<Document> & {
  _id: mongoose.Types.ObjectId;
  id?: mongoose.Types.ObjectId;
  username: string;
  password: string;
};

type UserWithoutPassword = Omit<User, "password">;

type UserWithoutPasswordRole = Omit<UserWithoutPassword, "role">;

export type {
  Question,
  User,
  UserWithoutPassword,
  UserWithoutPasswordRole,
  Answer,
};
