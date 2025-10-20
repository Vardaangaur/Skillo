import { generateToken } from "../libs/utils.js"
import bcrypt from "bcryptjs"
import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All credentials are required" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password length must be greater than 6" });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
        })

        if (newUser) {
            //GENERATE TOKEN
            generateToken(newUser._id, res);

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            })

        }
        else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({ message: "internal server error" })
    }


}

export const login=async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await User.findOne({email});
        if(!user){
             res.status(400).json({ message: "Wrong Credentials" });
        }

        const isPasswordCorrect=await bcrypt.compare(password,user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({ message: "Wrong Credentials" }); 
        }

        generateToken(user._id,res);
        res.status(200).json({
                _id:user._id,
                username:user.username,
                email:user.email,
                
            })


    }  catch (error) {
        console.log("error in Login controller",error.message);
        res.status(500).json({message:"internal server error"})
    }
}

export const logout=(req,res)=>{
try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out succes"})
    } catch (error) {
        console.log("error in Logout controller",error.message);
        res.status(500).json({message:"internal server error"})
    }
}

export const checkAuth=(req,res)=>{
    try {
        res.status(200).json(req.user);

    } catch (error) {
        console.log("error in checkAuth controller",error.message)
        res.status(500).json({message:"internal server error"})
    }
}