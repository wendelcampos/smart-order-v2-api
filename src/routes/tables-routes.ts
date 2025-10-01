import { Router } from "express";
import { TablesController } from "@/controllers/tables-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const tablesRoutes = Router()
const tablesController = new TablesController()

tablesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["user"]))

tablesRoutes.post("/", tablesController.create)
tablesRoutes.put("/:id", tablesController.update)
tablesRoutes.get("/", tablesController.index)
tablesRoutes.delete("/:id", tablesController.remove)

export { tablesRoutes }