import { Router } from "express";
import productController from "../controllers/productController.js";

const router = Router();

router.get("/products", productController.findAll);
router.get("/products/:id", productController.findById);
router.post("/products", productController.create);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.delete);

export default router;
