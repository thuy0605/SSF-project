import mongoose from "mongoose";

const databaseUrl = process.env.DATABASE_URL;

const mongoConnect = async () => {
  try {
    if (!databaseUrl) {
      throw new Error("DATABASE_URL is not defined");
    }
    await mongoose.connect(databaseUrl);
    console.log("DB connected successfully");
  } catch (error) {
    console.error("Connection to db failed: ", (error as Error).message);
  }
};

export default mongoConnect;
