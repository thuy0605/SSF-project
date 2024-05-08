import mongoConnect from "./lib/db";
import app from "./app";

const post = process.env.PORT || 3000;
(async () => {
  try {
    await mongoConnect();
    app.listen(post, () => {
      console.log(`Server is running on http://localhost:${post}`);
    });
  } catch (error) {
    console.error("Connection to db failed: ", (error as Error).message);
  }
})();
