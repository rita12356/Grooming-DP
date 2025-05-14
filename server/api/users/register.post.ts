import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
     await mongoose.connect("mongodb://localhost:27017/GroomingDP");
  try{
    const body = await readBody(event);
   const user = new User({
    email:body.email,
    name: body.name,
    password: body.password,
    types: 'Шпиц Стрижка "ШОУ" ГРУМИНГ',
    master: 'Орлова Алина Владимирона',
    time: '14:20'
 
});

await user.save();
 return user;
    
      } catch (e) {
        console.error(e);
      }

  return null;
});