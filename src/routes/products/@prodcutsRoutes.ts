import { app } from "routes/server.ts";
import { createProduct } from "./createProduct.ts";

export const ProdcutsRoutes = async () => {
  app.register(createProduct);
};
