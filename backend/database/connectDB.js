import mongoose from "mongoose";
import "dotenv/config";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to the database", error.message);
  }
}

export default connectDB;
