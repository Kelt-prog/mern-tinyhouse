import express from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql";

async function startExpressApolloServer() {
  const app = express();
  const port = 9000;
  const server = new ApolloServer({ schema });
  await server.start();

  server.applyMiddleware({ app, path: "/api" });

  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);

  app.listen(port);
  return { server, app };
}

startExpressApolloServer();
