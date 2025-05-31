import { Router } from "express";
import clientController from "../controllers/clientController.js";

const router = Router();

router.get("/clients", clientController.findAll);

export default router;
