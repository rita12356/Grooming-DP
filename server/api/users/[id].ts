import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
    let user;
    const id = getRouterParam(event, 'id')
    try {
        await mongoose.connect("mongodb://localhost:27017/Dog");
        user = await User.findOne({_id:id});
      } catch (e) {
        console.error(e);
      }

  return user;
});


