import express from "express";
import {
  createCategory,
  deleteCategories,
  deleteCategoryById,
  getCategory,
  getCategoryById,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.post("/", createCategory);
router.delete("/:id", deleteCategoryById);
router.delete("/", deleteCategories);
export default router;
