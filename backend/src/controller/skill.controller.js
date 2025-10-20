import Skill from "../models/skill.model.js";
import User from "../models/user.model.js";

export const addSkill = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name ) {
      return res.status(400).json({ message: "Pass name for skill" });
    }

    const existingSkill = await Skill.findOne({ name, owner: req.user._id });
    if (existingSkill) {
      return res.status(400).json({ message: "Skill already exists" });
    }

    const newSkill = new Skill({
      name,
      
      owner: req.user._id,
    });

    await newSkill.save();
    // ✅ Add skill reference to user's skills array
    await User.findByIdAndUpdate(req.user._id, {
      $push: { skills: newSkill._id },
    });

    return res
      .status(201)
      .json({ message: "Skill added successfully", skill: newSkill });
  } catch (error) {
    console.log("Error in addSkill controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMySkill = async (req, res) => {
  try {
    const skills = await Skill.find({ owner: req.user._id });

    return res.status(200).json(skills);
  } catch (error) {
    console.error("Error fetching skills:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getSkillById = async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await Skill.findById(id);

    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    return res.status(200).json(skill);
  } catch (error) {
    console.error("Error fetching skill:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name ) {
      return res
        .status(400)
        .json({ message: "Provide name or description to update" });
    }

    const skill = await Skill.findById(id);
    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    if (skill.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    if (name) skill.name = name;
    

    await skill.save();

    return res
      .status(201)
      .json({ message: "Skill updated successfully", skill });
  } catch (error) {
    console.error("Error updating skill:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await Skill.findById(id);

    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    if (skill.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    await Skill.findByIdAndDelete(id);

    return res.status(200).json({ message: "Skill deleted successfully" });
  } catch (error) {
    console.error("Error deleting skill:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
