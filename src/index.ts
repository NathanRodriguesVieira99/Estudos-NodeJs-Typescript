import { createServer } from "./server.ts";

const app = createServer();

app.listen({ port: 3333 }).then(() => {
    console.log("HTTP server running on port 3333");
  }).catch((error) => {
    console.error(error);
    process.exit(1);
  });
