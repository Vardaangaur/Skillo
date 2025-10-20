import mongoose from "mongoose";
import User from "../models/user.model.js";
import Skill from "../models/skill.model.js";

// Predefined skills
const skillNames = ["React", "NodeJs", "Python", "Django", "Java", "Spring", "MongoDB", "GraphQL", "TypeScript", "Tailwind"];

// Predefined users
const usersData = [
  {
    username: "Alice Johnson",
    email: "alice@example.com",
    password: "123456",
    skills: ["React", "NodeJs", "MongoDB"],
    desiredSkills: ["TypeScript", "GraphQL"]
  },
  {
    username: "Bob Smith",
    email: "bob@example.com",
    password: "123456",
    skills: ["Java", "Spring", "Django"],
    desiredSkills: ["React", "Tailwind"]
  },
  {
    username: "Charlie Lee",
    email: "charlie@example.com",
    password: "123456",
    skills: ["Python", "Django", "GraphQL"],
    desiredSkills: ["React", "NodeJs"]
  },
  {
    username: "David Kim",
    email: "david@example.com",
    password: "123456",
    skills: ["React", "Tailwind", "NodeJs"],
    desiredSkills: ["Java", "Spring"]
  },
  {
    username: "Emma Wilson",
    email: "emma@example.com",
    password: "123456",
    skills: ["Java", "GraphQL", "MongoDB"],
    desiredSkills: ["Python", "Django"]
  },
  {
    username: "Frank Miller",
    email: "frank@example.com",
    password: "123456",
    skills: ["NodeJs", "TypeScript", "React"],
    desiredSkills: ["Spring", "Java"]
  },
  {
    username: "Grace Lee",
    email: "grace@example.com",
    password: "123456",
    skills: ["Django", "Python", "Tailwind"],
    desiredSkills: ["React", "NodeJs"]
  },
  {
    username: "Henry Davis",
    email: "henry@example.com",
    password: "123456",
    skills: ["Java", "Spring", "MongoDB"],
    desiredSkills: ["GraphQL", "TypeScript"]
  },
  {
    username: "Isabella Brown",
    email: "isabella@example.com",
    password: "123456",
    skills: ["React", "Tailwind", "TypeScript"],
    desiredSkills: ["Django", "Python"]
  },
  {
    username: "Jack White",
    email: "jack@example.com",
    password: "123456",
    skills: ["NodeJs", "MongoDB", "GraphQL"],
    desiredSkills: ["React", "TypeScript"]
  },
  {
    username: "Karen Adams",
    email: "karen@example.com",
    password: "123456",
    skills: ["Python", "Django", "React"],
    desiredSkills: ["NodeJs", "Tailwind"]
  },
  {
    username: "Leo Martinez",
    email: "leo@example.com",
    password: "123456",
    skills: ["Java", "Spring", "TypeScript"],
    desiredSkills: ["React", "GraphQL"]
  },
  {
    username: "Mia Thompson",
    email: "mia@example.com",
    password: "123456",
    skills: ["NodeJs", "React", "Tailwind"],
    desiredSkills: ["Java", "Spring"]
  },
  {
    username: "Nathan Scott",
    email: "nathan@example.com",
    password: "123456",
    skills: ["GraphQL", "MongoDB", "TypeScript"],
    desiredSkills: ["React", "NodeJs"]
  },
  {
    username: "Olivia Clark",
    email: "olivia@example.com",
    password: "123456",
    skills: ["Python", "Django", "Tailwind"],
    desiredSkills: ["React", "NodeJs"]
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vardaangaur45_db_user:YrMYWrYIWoiQqvXU@cluster0.qouadod.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    // Delete existing users and skills
    await User.deleteMany({});
    await Skill.deleteMany({});
    console.log("Deleted existing users and skills.");

    // Insert skills
    const skillDocs = await Skill.insertMany(skillNames.map(name => ({ name, description: `${name} description` })));
    console.log("Inserted skills.");

    // Map skill names to IDs
    const skillMap = {};
    skillDocs.forEach(skill => skillMap[skill.name] = skill._id);

    // Prepare users with skill IDs
    const usersToInsert = usersData.map(u => ({
      username: u.username,
      email: u.email,
      password: u.password,
      skills: u.skills.map(s => skillMap[s]),
      desiredSkills: u.desiredSkills
    }));

    await User.insertMany(usersToInsert);
    console.log("Inserted users.");

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

seedDatabase();
