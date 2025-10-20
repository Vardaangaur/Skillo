import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUser, getUserById,getAllUsers, removeUser } from "../controller/users.controller.js";

const router = express.Router();

router.get("/me", protectRoute, getUser);

router.get("/:id", protectRoute, getUserById);

router.get("/",protectRoute,getAllUsers);

router.delete("/:id",protectRoute,removeUser);

export default router;
