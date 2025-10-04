import { Router } from "express";
import { OrdersItensController } from "@/controllers/ordersItens-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const ordersItensRoutes = Router()
const ordersItensController = new OrdersItensController()

ordersItensRoutes.use(ensureAuthenticated, verifyUserAuthorization(["user"]))

ordersItensRoutes.post("/", ordersItensController.create)
ordersItensRoutes.get("/", ordersItensController.index)
ordersItensRoutes.get("/order/:orderId/products", ordersItensController.getProductsByOrderId)
ordersItensRoutes.get("/:id", ordersItensController.show)
ordersItensRoutes.delete("/:id", ordersItensController.remove)

export { ordersItensRoutes }