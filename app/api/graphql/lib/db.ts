import mongoose from "mongoose";

const databaseUrl = process.env.DATABASE_URL;

const mongoConnect = async () => {
  try {
    if (!databaseUrl) {
      throw new Error("DATABASE_URL is not defined");
    }

    const connection = await mongoose.connect(databaseUrl);
    console.log("DB connected successfully");
    return connection;
  } catch (error) {
    console.error("Connection to db failed: ", (error as Error).message);
  }
};

export default mongoConnect;
