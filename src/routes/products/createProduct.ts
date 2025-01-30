import {
  fastify,
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";

export const createProduct = async (app: FastifyInstance) => {
  app.get("/products", (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(200).send([
      { id: 1, name: "bola" },
      { id: 2, name: "boné" },
    ]);
  });
};
