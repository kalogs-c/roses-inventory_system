import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  login: String,
  password: String,
  created: { type: Date, default: Date.now },
});

export default userSchema;