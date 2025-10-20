import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    // Only select needed fields
    const users = await User.find()
      .select("username email skills desiredSkills") // exclude password & unnecessary fields
      .populate("skills", "name description"); // get skill names and descriptions

      
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password").populate("skills", "name description");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);

    } catch (error) {
        console.error("Error fetching user:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const getUserById=async(req,res)=>{
    try {
        const user = await User.findById(req.params.id).select("-password").populate("skills", "name description");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);

    } catch (error) {
        console.error("Error fetching user:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const removeUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
