import { Router } from "express";
import clientController from "../controllers/clientController.js";


const router = Router();

router.get("/clients", clientController.findAll);
router.get("/clients/:id", clientController.findById);
router.post("/clients", clientController.create);
router.put("/clients/:id", clientController.update);
router.delete("/clients/:id", clientController.delete);

export default router;