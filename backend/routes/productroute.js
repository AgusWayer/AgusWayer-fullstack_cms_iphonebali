import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

import { createProduct, deleteProduct, getProducts, getProductsById, updateProducts, getProductsByName, deleteAllProduct } from "../controllers/productController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, path.parse(file.originalname).name + "-" + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

router.use("/uploads", express.static("uploads"));
router.get("/", getProducts);
router.get("/:id", getProductsById);
router.get("/search/:name", getProductsByName);
router.post("/", upload.single("image"), createProduct);
router.delete("/:id", deleteProduct);
router.delete("/", deleteAllProduct);

export default router;
