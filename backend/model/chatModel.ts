import mongoose from "mongoose";
import { Question } from "../types/DBTypes";

const chatSchema = new mongoose.Schema<Question>({
  question: {
    type: String,
  },
});

export default mongoose.model<Question>("Question", chatSchema);
