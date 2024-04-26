import mongoose, { Document } from "mongoose";

type Question = {
  _id: mongoose.Types.ObjectId;
  id?: mongoose.Types.ObjectId;
  question: string;
};

type User = Partial<Document> & {
  user_name: string;
  email: string;
  password: string;
};

export type { Question, User };
