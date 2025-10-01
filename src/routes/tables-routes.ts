import { Router } from "express";
import { TablesController } from "@/controllers/tables-controller";

const tablesRoutes = Router()
const tablesController = new TablesController()

tablesRoutes.post("/", tablesController.create)
tablesRoutes.put("/:id", tablesController.update)
tablesRoutes.get("/", tablesController.index)
tablesRoutes.delete("/:id", tablesController.remove)

export { tablesRoutes }