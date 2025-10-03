import { Router } from "express";

import { usersRoutes } from "./users-routes";
import { sessionsRoutes } from "./sessions-routes";
import { productsRoutes } from "./products-routes";
import { customersRoutes } from "./customers-routes";
import { waitersRoutes } from "./waiters-routes";
import { tablesRoutes } from "./tables-routes";
import { ordersRoutes } from "./orders-routes";

const router = Router()

router.use("/users", usersRoutes)
router.use("/sessions", sessionsRoutes)
router.use("/products", productsRoutes)
router.use("/customers", customersRoutes)
router.use("/waiters", waitersRoutes)
router.use("/tables", tablesRoutes)
router.use("/orders", ordersRoutes)

export { router }