import express, { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router();
import {getMyDesiredSkill,addDesiredSkill,removeDesiredSkill} from "../controller/desired.controller.js";


/* -------------------- DESIRED SKILLS ROUTES -------------------- */

router.get("/", protectRoute, getMyDesiredSkill);

router.post("/", protectRoute, addDesiredSkill);

router.delete("/", protectRoute, removeDesiredSkill);

export default router;