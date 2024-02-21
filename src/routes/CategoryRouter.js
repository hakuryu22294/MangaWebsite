import { Router } from "express";
import {
  getAllCategories,
  getDetailCategory,
  createCategory,
} from "../controllers/CategoryController.js";

const catRouter = Router();

catRouter.get("/", getAllCategories);
catRouter.get("/:id", getDetailCategory);
catRouter.post("/create", createCategory);

export default catRouter;
