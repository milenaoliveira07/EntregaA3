import { Router } from "express";
import sellerController from "../controllers/sellerController.js";

const router = Router();

router.get("/sellers", sellerController.findAll);
router.get("/sellers/:id", sellerController.findById);
router.post("/sellers", sellerController.create);
router.put("/sellers/:id", sellerController.update);
router.delete("/sellers/:id", sellerController.delete);

export default router;