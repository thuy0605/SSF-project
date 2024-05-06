import mongoose, { Document } from "mongoose";

type Question = {
  _id: mongoose.Types.ObjectId;
  id?: mongoose.Types.ObjectId;
  question: string;
  owner: mongoose.Types.ObjectId;
};

type Answer = {
  _id: mongoose.Types.ObjectId;
  id?: mongoose.Types.ObjectId;
  answer: string;
  owner: mongoose.Types.ObjectId;
  question: mongoose.Types.ObjectId;
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
