import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getDetailProduct,
  updateProduct,
  deleteProduct,
  updateView,
} from "../controllers/ProductController.js";
import uploadCloud from "../middleware/uploader.middleware.js";

const prdRouter = Router();

prdRouter.get("/", getAllProducts);
prdRouter.post("/create", uploadCloud.single("image"), createProduct);
prdRouter.get("/:id", getDetailProduct);
prdRouter.put("/:id", uploadCloud.single("image"), updateProduct);
prdRouter.delete("/:id", deleteProduct);
prdRouter.patch("/view/:id", updateView);

export default prdRouter;
