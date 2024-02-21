import { Router } from "express";
import prdRouter from "./ProductRouter.js";
import catRouter from "./CategoryRouter.js";
import authRouter from "./UserRouter.js";

const router = Router();

router.use("/products", prdRouter);
router.use("/category", catRouter);
router.use("/auth", authRouter);

export default router;
