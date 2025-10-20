import express from "express";
import { logout, signup, login,  checkAuth } from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js"; 

const router = express.Router();

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

// Logout route
router.post("/logout", logout);


router.get("/check",protectRoute,checkAuth)

export default router;
