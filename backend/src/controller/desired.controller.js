import User from "../models/user.model.js";

// GET all desired skills of the logged-in user
export const getMyDesiredSkill = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.status(200).json(user.desiredSkills || []);
  } catch (error) {
    console.error("Error fetching desired skills:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ADD a desired skill by name
export const addDesiredSkill = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Skill name required" });

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.desiredSkills.includes(name)) {
      return res.status(400).json({ message: "Skill already in desired skills" });
    }

    user.desiredSkills.push(name);
    await user.save();

    return res.status(201).json({
      message: "Skill added to desired skills",
      desiredSkills: user.desiredSkills
    });
  } catch (error) {
    console.error("Error adding desired skill:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};



// REMOVE a desired skill by name
export const removeDesiredSkill = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Skill name required" });

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.desiredSkills.includes(name)) {
      return res.status(404).json({ message: "Skill not in desired skills" });
    }

    user.desiredSkills = user.desiredSkills.filter(s => s !== name);
    await user.save();

    return res.status(200).json({
      message: "Skill removed from desired skills",
      desiredSkills: user.desiredSkills
    });
  } catch (error) {
    console.error("Error removing desired skill:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
