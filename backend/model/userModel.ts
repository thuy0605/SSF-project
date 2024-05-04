import mongoose from "mongoose";
import { User } from "../types/DBTypes";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<User>("User", userSchema);
