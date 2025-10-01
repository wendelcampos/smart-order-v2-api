import { Router } from "express";
import { WaitersController } from "@/controllers/waiters-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const waitersRoutes = Router()
const waitersController = new WaitersController()

waitersRoutes.use(ensureAuthenticated, verifyUserAuthorization(["user"]))

waitersRoutes.post("/", waitersController.create)
waitersRoutes.put("/:id", waitersController.update)
waitersRoutes.get("/", waitersController.index)
waitersRoutes.delete("/:id", waitersController.remove)

export { waitersRoutes }