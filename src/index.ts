import { fastify } from "fastify";

const app = fastify();

app.get("/products", (request, reply) => {
  reply.send({Hello: 'World'})
});

app.listen({ port: 3333 }).then(() => {
    console.log("HTTP server running on port 3333");
  }).catch((error) => {
    console.error(error);
    process.exit(1);
  });

