import express from "express";
import { register, verifyOtp , login } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post('/verify', verifyOtp);
router.post("/login", login);

export default router;
