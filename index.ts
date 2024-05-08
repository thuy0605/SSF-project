import express, { Request, Response, NextFunction } from "express";
import next from "next";
import mongoConnect from "./app/api/graphql/lib/db";

const port: number = parseInt(process.env.PORT as string, 10) || 3000;
const dev: boolean = process.env.NODE_ENV !== "production";

const startServer = async () => {
  const nextApp = next({ dev });
  const handle = nextApp.getRequestHandler();
  await nextApp.prepare();

  const app = express();

  // // Middleware for parsing JSON bodies
  // app.use(express.json());

  // CORS middleware
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, PUT, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

  // Connect to MongoDB
  await mongoConnect();

  // All other requests are handled by Next.js
  app.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  // Start the Express server
  app.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`Server is running on http://localhost:${port}`);
  });
};

startServer();
