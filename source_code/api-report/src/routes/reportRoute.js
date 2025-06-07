import { Router } from "express";
import reportController from "../controllers/reportController.js";

const router = Router();

router.get(
  "/reports/top-selling-products",
  reportController.findTopSellingProducts
);
router.get(
  "/reports/products-by-client/:id",
  reportController.findProductsByClient
);
router.get(
  "/reports/average-consumption-by-client",
  reportController.findAverageConsumptionByClient
);
router.get(
  "/reports/low-stock-products",
  reportController.findLowStockProducts
);

export default router;
