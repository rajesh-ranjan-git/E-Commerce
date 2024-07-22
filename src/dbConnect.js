import mongoose from "mongoose";
import "dotenv/config";

const dbConnect = async () => {
  return await mongoose.connect(process.env.MONGODB_URI);
};

export default dbConnect;
