import mongoose from "mongoose";
import { Question } from "../types/DBTypes";

const chatSchema = new mongoose.Schema<Question>({
  question: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model<Question>("Question", chatSchema);
