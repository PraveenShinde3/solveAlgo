import mongoose from "mongoose";
import { DB_NAME } from "../data/constant.js";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  try {
    const opts = {
      bufferCommands: false,
      dbName: DB_NAME, // Specify the database name here
    };
    const conn = await mongoose.connect(process.env.MONGODB_URI, opts);
    console.log("MongoDB connected: ", conn.connection.host);
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
