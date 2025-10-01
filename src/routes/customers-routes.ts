import { Router } from "express";
import { CustomersController } from "@/controllers/customers-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const customersRoutes = Router()
const customersController = new CustomersController()

customersRoutes.use(ensureAuthenticated, verifyUserAuthorization(["user"]))

customersRoutes.post("/", customersController.create)
customersRoutes.get("/", customersController.index)
customersRoutes.delete("/:id", customersController.remove)
customersRoutes.put("/:id", customersController.update)
customersRoutes.get("/:id", customersController.show)

export { customersRoutes }