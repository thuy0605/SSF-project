import mongoose from "mongoose";
import { Answer } from "../types/DBTypes";
import e from "express";

const answerSchema = new mongoose.Schema<Answer>({
  answer: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
});

export default mongoose.model<Answer>("Answer", answerSchema);
