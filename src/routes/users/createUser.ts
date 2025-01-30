import {
  fastify,
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";

export const createUser = async (app: FastifyInstance) => {
  app.get("/users", (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(200).send("User criado com sucesso");
  });
};
