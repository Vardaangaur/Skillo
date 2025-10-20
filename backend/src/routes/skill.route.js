import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  addSkill,
  deleteSkill,
  getMySkill,
  getSkillById,
  updateSkill,
} from "../controller/skill.controller.js";



const router = express.Router();

/* -------------------- SKILL CRUD ROUTES -------------------- */
// Create a skill (owned by user)
router.post("/", protectRoute, addSkill);

// Get all skills owned by logged-in user
router.get("/", protectRoute, getMySkill);

// Get single skill by ID
router.get("/:id", protectRoute, getSkillById);

// Update a skill by ID
router.put("/:id", protectRoute, updateSkill);

// Delete a skill by ID
router.delete("/:id", protectRoute, deleteSkill);



export default router;
