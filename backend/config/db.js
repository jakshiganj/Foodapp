import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://jakshigan:1234@cluster0.3vids.mongodb.net/food-app').then(()=>console.log("DB Connected"));
}