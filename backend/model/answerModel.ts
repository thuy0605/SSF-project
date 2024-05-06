import mongoose from "mongoose";
import { Answer } from "../types/DBTypes";
import e from "express";

const answerSchema = new mongoose.Schema<Answer>({
  answer: {
    type: String,
  },
});

export default mongoose.model<Answer>("Answer", answerSchema);
