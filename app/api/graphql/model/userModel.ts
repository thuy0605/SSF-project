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

let userModel = mongoose.models["User"];
if (!userModel) {
  userModel = mongoose.model<User>("User", userSchema);
}

export default userModel;
