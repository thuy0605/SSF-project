require("dotenv").config();
import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import typeDefs from "./schema/index";
import chatResolver from "./resolver/chatResolver";
import userResolver from "./resolver/userResolver";
import { log } from "console";

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
      resolvers: [chatResolver, userResolver],
    });

    await server.start();

    app.use("/graphql", cors(), express.json(), expressMiddleware(server));
  } catch (error) {
    console.error("Connection to db failed: ", (error as Error).message);
  }
})();

export default app;
