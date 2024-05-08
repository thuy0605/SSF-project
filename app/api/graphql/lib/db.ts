import mongoose from "mongoose";

const databaseUrl =
  process.env.DATABASE_URL ??
  "mongodb+srv://thanhthuyta1989:L7MEAyx0YCLDvx2O@sssfcourse.2hh9exy.mongodb.net/?retryWrites=true&w=majority&appName=SSSFcourse";

const mongoConnect = async () => {
  try {
    const connection = await mongoose.connect(databaseUrl);
    console.log("DB connected successfully");
    return connection;
  } catch (error) {
    console.error("Connection to db failed: ", (error as Error).message);
  }
};

export default mongoConnect;
