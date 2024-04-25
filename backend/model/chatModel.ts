import mongoose from "mongoose";
import { Chat } from "../types/DBTypes";

const chatSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

export default mongoose.model<Chat>("Chat", chatSchema);
