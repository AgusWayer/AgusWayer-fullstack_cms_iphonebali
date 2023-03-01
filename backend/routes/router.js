import express from "express";
import multer from "multer";

import { getUser, createUser, logInUser, deleteUserById } from "../controllers/userController.js";

const router = express.Router();


router.get("/", getUser);
router.post("/", createUser);
router.post("/login", logInUser);
router.delete("/delete/:id", deleteUserById);

export default router

