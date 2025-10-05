import { Router } from "express";
import { PaymentsController } from "@/controllers/payments-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const paymentsRoutes = Router()
const paymentsController = new PaymentsController()

paymentsRoutes.use(ensureAuthenticated, verifyUserAuthorization(["user"]))

paymentsRoutes.post("/", paymentsController.create)
paymentsRoutes.get("/:id", paymentsController.getShowPayment)

export { paymentsRoutes }