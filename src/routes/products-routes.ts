import { Router } from "express";
import { ProductsController } from "@/controllers/products-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const productsRoutes = Router()
const productsController = new ProductsController()

productsRoutes.use(ensureAuthenticated, verifyUserAuthorization(["user"]))

productsRoutes.post("/", productsController.create)
productsRoutes.get("/", productsController.index)
productsRoutes.delete("/:id", productsController.remove)
productsRoutes.get("/:id", productsController.show)
productsRoutes.put("/:id", productsController.update)

export { productsRoutes }