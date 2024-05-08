import mongoose from "mongoose";
import { Answer } from "../types/DBTypes";

const answerSchema = new mongoose.Schema<Answer>({
  answer: {
    type: String,
  },
});

let answerModel = mongoose.models["Answer"];
if (!answerModel) {
  answerModel = mongoose.model<Answer>("Answer", answerSchema);
}

export default answerModel;
