import express from "express";
import { createStatus, deleteStatus, deleteStatusById, getStatus, getStatusById } from "../controllers/statusController.js";

const router = express.Router();

router.get("/", getStatus);
router.get("/:id", getStatusById);
router.post("/", createStatus);
router.delete("/:id", deleteStatusById);
router.delete("/", deleteStatus);
export default router;
