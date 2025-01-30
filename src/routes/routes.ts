import { app } from "./server.ts";
import { ProdcutsRoutes } from "./products/@prodcutsRoutes.ts";
import { UserRoutes } from "./users/@userRoutes.ts";

export const routes = async () => {
  app.register(ProdcutsRoutes);
  app.register(UserRoutes);
};
