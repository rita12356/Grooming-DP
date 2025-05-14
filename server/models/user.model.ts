import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    master: String,
    time: String,
    types: String
   
  });
  
export const User = model("User", UserSchema);