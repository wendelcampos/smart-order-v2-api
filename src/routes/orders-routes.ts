import { Router } from "express";
import { OrdersController } from "@/controllers/orders-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const ordersRoutes = Router()
const ordersController = new OrdersController()

ordersRoutes.use(ensureAuthenticated, verifyUserAuthorization(["user"]))

ordersRoutes.post("/", ordersController.create)
ordersRoutes.get("/", ordersController.index)
ordersRoutes.get("/:id", ordersController.show)
ordersRoutes.delete("/:id", ordersController.remove)

export { ordersRoutes }