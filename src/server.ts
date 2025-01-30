import { fastify, FastifyInstance } from "fastify";

export function createServer(): FastifyInstance {
  const app = fastify();

  app.get("/products", (request, reply) => {
    reply.send({ Hello: "World" });
  });

  return app;
}
