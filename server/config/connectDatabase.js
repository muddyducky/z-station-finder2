import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

//___ CONNECTION URI ___
const MongoDB = process.env.MONGO_DB_URI;

mongoose.Promise = global.Promise;

//___ DATABASE CONNECTION ___
const connectDB = async () => {
  try {
    await mongoose.connect(MongoDB);
    console.log("MongoDB Connected to:", mongoose.connection.name);
  } catch (err) {
    console.error("Connection Error:", err.message);
    process.exit(1);
  }
};

//___ DISCONNECT DATABASE ___
const closeDB = async () => {
  await mongoose.connection.close();
  console.log("MongoDB Connection Closed");
};

//___ DISCONNECTION VALIDATION ___
process.once("exit", async () => {
  if (mongoose.connection.readyState === 1) {
    await closeDB();
  }
});

export { connectDB, closeDB };