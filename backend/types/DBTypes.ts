import mongoose, { Document } from "mongoose";

type Chat = {
  _id: mongoose.Types.ObjectId;
  id?: mongoose.Types.ObjectId;
  message: string;
};

type User = Partial<Document> & {
  user_name: string;
  email: string;
  password: string;
};

export type { Chat, User };
