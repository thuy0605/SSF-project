import mongoose from "mongoose";
import { Question } from "../types/DBTypes";

const questionSchema = new mongoose.Schema<Question>({
  question: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  answer: {
    type: String,
  },
});

let questionModel = mongoose.models["Question"];
if (!questionModel) {
  questionModel = mongoose.model<Question>("Question", questionSchema);
}

export default questionModel;
