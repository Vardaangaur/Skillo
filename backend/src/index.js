import express from 'express';
import { connectDB } from './libs/db.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import skillRoutes from "./routes/skill.route.js";
import userRoutes from "./routes/users.route.js";
import desiredSkillRoutes from "./routes/desired.route.js";
import cors from "cors"


dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}
))


const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/desired", desiredSkillRoutes);
app.use("/api/users", userRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
