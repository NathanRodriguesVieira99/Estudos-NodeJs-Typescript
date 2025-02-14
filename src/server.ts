import { fastify } from "fastify";
import { routes } from "./routes.ts";
import cors from "@fastify/cors";

export const app = fastify();
app.register(routes);
app.register(cors, {});

export async function startServer() {
  app
    .listen({ port: 3333 })
    .then(() => {
      console.log("Server running on port 3333");
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
