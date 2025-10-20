import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {

        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized User-no token" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized - Invalid token" });       // JWT payload example: token aisa dikhta h uske under hum user id access krte h
                                                                                            // { "userId": "<MongoDB _id>", "iat": <issued at timestamp>, "exp": <expiry timestamp> }

        }

        const user = await User.findById(decoded.userId).select("-password")

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user=user;

        next(); 

    } catch (error) {
        console.error("Error in protectRoute:", error);
        return res.status(401).json({ message: "Unauthorized - Invalid or expired token" });
    }

}