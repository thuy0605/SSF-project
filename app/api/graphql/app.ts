require("dotenv").config();
import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import typeDefs from "./schema/index";
import chatResolver from "./resolver/questionResolver";
import userResolver from "./resolver/userResolver";
import answerResolver from "./resolver/answerResolver";

const app = express();
(async () => {
  try {
    app.use(
      helmet({
        contentSecurityPolicy: false,
        crossOriginEmbedderPolicy: false,
      })
    );
    app.get("/", (_req: Request, res: Response) => {
      res.send({ message: "server is running" });
    });

    const server = new ApolloServer({
      typeDefs: typeDefs,
      resolvers: [chatResolver, userResolver, answerResolver],
    });

    await server.start();

    app.use("/graphql", cors(), express.json(), expressMiddleware(server));
  } catch (error) {
    console.error("Connection to db failed: ", (error as Error).message);
  }
})();

export default app;
