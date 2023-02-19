import express from "express";
import { createLabel, deleteLabels, deleteLabelById, getLabel, getLabelById } from "../controllers/labelController.js";

const router = express.Router();

router.get("/", getLabel);
router.get("/:id", getLabelById);
router.post("/", createLabel);
router.delete("/:id", deleteLabelById);
router.delete("/", deleteLabels);
export default router;
