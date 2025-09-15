import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const Connection = async () => {
  const URL = process.env.MONGO_URI; // ✅ match with .env key

  try {
    if (!URL) {
      throw new Error("MONGO_URI is not defined in .env file");
    }

    await mongoose.connect(URL, {
      // use defaults, don't force bufferCommands: false
    });

    console.log("✅ Database connected successfully");
  } catch (error: any) {
    console.error("❌ Error while connecting with the database:", error.message);
    process.exit(1); // stop server if DB connection fails
  }
};
