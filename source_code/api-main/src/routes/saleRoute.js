import { Router } from "express";
import SaleController from "../controllers/saleController.js";

const router = Router();

router.get("/sales", SaleController.findAll);
router.get("/sales/:id", SaleController.findById);
router.post("/sales", SaleController.create);
router.put("/sales/:id", SaleController.update);
router.delete("/sales/:id", SaleController.delete);

export default router;