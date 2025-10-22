import React, { useEffect, useState } from "react";
import { User, Pencil, Mail } from "lucide-react";
import { useUserStore } from "../store/useUserStore.js";
import { useSkillStore } from "../store/useSkillStore.js";

const ProfilePage = () => {
  const { getUser, currentUser } = useUserStore();
  const { addSkill, addDesired, updateSkill, removeSkill, removeDesired } = useSkillStore();

  const [newSkill, setNewSkill] = useState("");
  const [newDesired, setNewDesired] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [isDesiredAdding, setIsDesiredAdding] = useState(false);
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);
  const [updatedSkillData, setUpdatedSkillData] = useState("");

  useEffect(() => {
    getUser();
  }, [getUser]);

  // Handlers
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newSkill.trim()) return;
    await addSkill({ name: newSkill });
    setNewSkill("");
    setIsAdding(false);
    getUser();
  };

  const handleDesiredAdd = async (e) => {
    e.preventDefault();
    if (!newDesired.trim()) return;
    await addDesired({ name: newDesired });
    setNewDesired("");
    setIsDesiredAdding(false);
    getUser();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!updatedSkillData.trim()) return;
    await updateSkill({ name: updatedSkillData }, updatingId);
    setUpdatingId(null);
    setUpdatedSkillData("");
    setIsEditingSkills(false);
    getUser();
  };

  const handleSkillDelete = async (id) => {
    await removeSkill(id);
    getUser();
  };

  const handleDesiredDelete = async (name) => {
    await removeDesired(name);
    getUser();
  };

  // Generate dynamic bio
  const generateBio = () => {
    const skills = currentUser?.skills?.map((s) => s.name).join(", ");
    const desired = currentUser?.desiredSkills?.join(", ");

    let bio = "Passionate about learning and growth.";
    if (skills && desired) {
      bio = `Skilled in ${skills}. Eager to learn ${desired}.`;
    } else if (skills) {
      bio = `Skilled in ${skills}. Always looking to grow further.`;
    } else if (desired) {
      bio = `Aspiring to learn ${desired} and expand my expertise.`;
    }
    return bio;
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden py-12 px-4 text-gray-200">
      {/* Floating background shapes */}
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-red-600/20 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-16 w-36 h-36 bg-pink-500/20 rounded-full blur-2xl animate-bounce-slower"></div>

      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl mx-auto z-10 relative">

        {/* Profile Card */}
        <div className="bg-gray-800 shadow-2xl rounded-3xl p-8 w-full lg:w-1/2 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-pink-600/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-spin-slow"></div>

          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-red-500 to-pink-500 flex items-center justify-center text-white shadow-lg transform transition-transform duration-500 hover:scale-110">
              <User size={60} />
            </div>
            <button className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full p-2 hover:scale-110 shadow-lg transition-all">
              <Pencil size={16} />
            </button>
          </div>

          <h2 className="text-3xl font-extrabold mt-4 animate-fade-in">{currentUser?.username}</h2>
          <p className="text-red-400 font-semibold text-sm mt-1 animate-fade-in delay-100">
            {"“Learning never exhausts the mind.”"}
          </p>
          <p className="text-gray-300 mt-2 text-sm max-w-md animate-fade-in delay-200">
            {generateBio()}
          </p>

          <div className="flex items-center gap-2 bg-gray-700 rounded-lg px-4 py-2 mt-4 shadow-inner w-full max-w-xs justify-center animate-fade-in delay-300">
            <Mail size={18} className="text-red-400" />
            <span className="truncate">{currentUser?.email}</span>
          </div>

          <button className="mt-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:scale-105 shadow-xl font-medium text-sm transition-all animate-bounce-slow">
            Edit Profile
          </button>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">

          {/* Skills I Know */}
          <div className="bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-transform duration-300 p-6 border border-gray-700 relative overflow-hidden">
            <h3 className="text-lg font-bold mb-2 animate-fade-in">Skills I Know</h3>
            <p className="text-gray-400 text-sm mb-3 animate-fade-in delay-100">
              These are the skills you’ve mastered so far. Keep them sharp!
            </p>

            <div className="flex flex-wrap gap-2">
              {currentUser?.skills?.length ? (
                currentUser.skills.map((skill) => (
                  <div
                    key={skill._id}
                    className="flex items-center gap-1 bg-gray-700 text-red-400 px-3 py-1 rounded-full text-sm font-medium hover:bg-red-500/20 hover:text-red-300 hover:scale-105 transition transform"
                  >
                    {skill.name}
                    <button
                      className="ml-1 text-gray-400 hover:text-white"
                      onClick={() => handleSkillDelete(skill._id)}
                    >
                      ✕
                    </button>
                    <button
                      className="ml-1 text-gray-400 hover:text-white"
                      onClick={() => {
                        setIsEditingSkills(true);
                        setUpdatingId(skill._id);
                        setUpdatedSkillData(skill.name);
                      }}
                    >
                      ✎
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic text-sm">No skills added yet</p>
              )}
            </div>

            {/* Add/Edit Skill Input */}
            {isEditingSkills && updatingId ? (
              <form onSubmit={handleUpdate} className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={updatedSkillData}
                  onChange={(e) => setUpdatedSkillData(e.target.value)}
                  placeholder="Update skill"
                  className="px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
                <button type="submit" className="bg-red-500 text-white px-3 rounded-lg">
                  Update
                </button>
                <button
                  type="button"
                  className="bg-gray-600 text-white px-3 rounded-lg"
                  onClick={() => {
                    setIsEditingSkills(false);
                    setUpdatingId(null);
                  }}
                >
                  Cancel
                </button>
              </form>
            ) : isAdding ? (
              <form onSubmit={handleAdd} className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Enter new skill"
                  className="px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
                <button type="submit" className="bg-red-500 text-white px-3 rounded-lg">
                  Add
                </button>
                <button
                  type="button"
                  className="bg-gray-600 text-white px-3 rounded-lg"
                  onClick={() => setIsAdding(false)}
                >
                  Cancel
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsAdding(true)}
                className="mt-2 text-sm text-red-400 hover:underline"
              >
                + Add Skill
              </button>
            )}
          </div>

          {/* Skills I Want to Learn */}
          <div className="bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-transform duration-300 p-6 border border-gray-700 relative overflow-hidden">
            <h3 className="text-lg font-bold mb-2 animate-fade-in">Skills I Want to Learn</h3>
            <p className="text-gray-400 text-sm mb-3 animate-fade-in delay-100">
              These are the skills you are aiming to learn next. Stay curious!
            </p>

            <div className="flex flex-wrap gap-2">
              {currentUser?.desiredSkills?.length ? (
                currentUser.desiredSkills.map((desired) => (
                  <div
                    key={desired}
                    className="flex items-center gap-1 bg-gray-700 text-teal-400 px-3 py-1 rounded-full text-sm font-medium hover:bg-teal-500/20 hover:text-teal-300 hover:scale-105 transition transform"
                  >
                    <span>{desired}</span>
                    <button
                      className="ml-1 text-gray-400 hover:text-white"
                      onClick={() => handleDesiredDelete(desired)}
                    >
                      ✕
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic text-sm">No desired skills yet</p>
              )}
            </div>

            {/* Add Desired Skill Input */}
            {isDesiredAdding ? (
              <form onSubmit={handleDesiredAdd} className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={newDesired}
                  onChange={(e) => setNewDesired(e.target.value)}
                  placeholder="Enter desired skill"
                  className="px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
                <button type="submit" className="bg-teal-500 text-white px-3 rounded-lg">
                  Add
                </button>
                <button
                  type="button"
                  className="bg-gray-600 text-white px-3 rounded-lg"
                  onClick={() => setIsDesiredAdding(false)}
                >
                  Cancel
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsDesiredAdding(true)}
                className="mt-2 text-sm text-teal-400 hover:underline"
              >
                + Add Desired Skill
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
