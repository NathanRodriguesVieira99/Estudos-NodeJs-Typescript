import { createUser } from "./createUser.ts";
import { app } from "routes/server.ts";

export const UserRoutes = async () => {
  app.register(createUser);
};
