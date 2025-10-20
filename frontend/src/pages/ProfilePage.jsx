import React, { useEffect, useState } from "react";
import { User, Pencil, CirclePlus, Mail, Trash2, X, Check } from "lucide-react";
import { useUserStore } from "../store/useUserStore.js";
import { useSkillStore } from "../store/useSkillStore.js";

const ProfilePage = () => {
  const { getUser, currentUser } = useUserStore();
  const { skills, desiredSkills, getMySkill, addSkill, addDesired, updateSkill ,removeSkill,removeDesired} = useSkillStore();

  const [newSkill, setNewSkill] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [isDesiredAdding, setIsDesiredAdding] = useState(false);
  const [newDesired, setNewDesired] = useState("");

  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [isEditingDesired, setIsEditingDesired] = useState(false);

  const [updatingId, setUpdatingId] = useState(null)
  const [updatedSkillData, setUpdatedSkillData] = useState("")

  const [deleteId,setDeleteId]=useState(null)

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
    getUser();
  };

  const handleSkillDelete=async(id)=>{
    
    await removeSkill(id);
    setDeleteId(null);
    getUser()
  }

  const handleDesiredDelete=async(name)=>{
    await removeDesired(name);
    await getUser();
  }

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-12 px-4">
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
        {/* Left: Profile Card */}
        <div className="bg-white shadow-lg hover:shadow-xl rounded-3xl p-8 w-full lg:w-1/2 flex flex-col items-center text-center transition-all duration-300">
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#fe424d]/20 to-[#fe424d]/40 flex items-center justify-center text-[#fe424d] shadow-inner">
              <User size={56} />
            </div>
            <button className="absolute -bottom-2 -right-2 bg-[#fe424d] text-white rounded-full p-2 hover:bg-red-600 transition">
              <Pencil size={16} />
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-4">{currentUser?.username}</h2>
          <p className="text-gray-600 mt-1 text-sm">
            Passionate about coding, design, and continuous learning.
          </p>

          <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2 mt-4 shadow-inner w-full max-w-xs justify-center">
            <Mail size={18} className="text-[#fe424d]" />
            <span className="text-gray-600 text-sm truncate">{currentUser?.email}</span>
          </div>

          <button className="mt-6 bg-[#fe424d] text-white px-6 py-2.5 rounded-lg hover:bg-red-600 transition-colors shadow-md font-medium text-sm">
            Edit Profile
          </button>
        </div>

        {/* Right: Skills Section */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">

          {/* Skills I Know */}
          <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-red-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center justify-between">
              Skills I Know
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsAdding(!isAdding)}
                  className="flex items-center justify-center w-9 h-9 bg-white border border-red-300 rounded-full shadow hover:bg-red-50 transition-colors duration-200"
                >
                  <CirclePlus className="text-[#fe424d] w-4 h-4" />
                </button>

                {isEditingSkills ? (
                  <button 
                    onClick={()=>{setIsEditingSkills(false); setUpdatingId(null);}}
                    className="flex items-center justify-center w-9 h-9 bg-white border border-gray-400 rounded-full shadow hover:bg-gray-100 transition-colors duration-200"
                  >
                    <X className="text-gray-600 w-4 h-4"/>
                  </button>
                ) : (
                  <button
                    onClick={() => setIsEditingSkills(true)}
                    className="flex items-center justify-center w-9 h-9 bg-white border border-gray-400 rounded-full shadow hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Pencil className="text-gray-600 w-4 h-4" />
                  </button>
                )}
              </div>
            </h3>

            <div className="flex flex-wrap gap-2">
              {currentUser?.skills?.length ? (
                currentUser.skills.map((skill) => (
                  <div
                    key={skill._id}
                    className="flex items-center gap-1 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-red-200 transition"
                  >
                    {updatingId === skill._id ? (
                      <form className="flex items-center gap-1" onSubmit={handleUpdate}>
                        <input
                          type="text"
                          value={updatedSkillData}
                          onChange={(e) => setUpdatedSkillData(e.target.value)}
                          className="bg-white text-red-700 px-2 py-0.5 rounded-md border border-red-300 focus:outline-none focus:ring-1 focus:ring-[#fe424d] w-28 text-sm"
                        />
                        <button
                          type="submit"
                          className="flex items-center justify-center w-6 h-6 rounded-full bg-[#fe424d] hover:bg-red-600 text-white transition"
                        >
                          <Check size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setUpdatingId(null)}
                          className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-300 hover:bg-gray-400 text-white transition"
                        >
                          <X size={14} />
                        </button>
                      </form>
                    ) : (
                      <span>{skill.name}</span>
                    )}

                    {isEditingSkills && !updatingId && (
                      <>
                        <button
                          onClick={() => {setUpdatingId(skill._id); setUpdatedSkillData(skill.name);}}
                          className="flex items-center justify-center w-5 h-5 rounded-full hover:bg-red-300 transition duration-150"
                        >
                          <Pencil className="w-3 h-3 text-gray-600" />
                        </button>
                        <button className="flex items-center justify-center w-5 h-5 rounded-full hover:bg-red-300 transition duration-150">
                          <Trash2 
                          onClick={()=>handleSkillDelete(skill._id)}
                          className="w-3 h-3 text-gray-600" />
                        </button>
                      </>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 italic text-sm">No skills added yet</p>
              )}
            </div>

            {isAdding && (
              <form className="flex gap-2 mt-4" onSubmit={handleAdd}>
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill you know"
                  className="px-3 py-2 rounded-lg border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-[#fe424d]/40 text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#fe424d] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm"
                >
                  Add
                </button>
              </form>
            )}
          </div>

          {/* Skills I Want to Learn */}
          <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-cyan-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center justify-between">
              Skills I Want to Learn
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsDesiredAdding(!isDesiredAdding)}
                  className="flex items-center justify-center w-9 h-9 bg-white border border-cyan-300 rounded-full shadow hover:bg-cyan-50 transition-colors duration-200"
                >
                  <CirclePlus className="text-cyan-600 w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsEditingDesired(!isEditingDesired)}
                  className="flex items-center justify-center w-9 h-9 bg-white border border-gray-400 rounded-full shadow hover:bg-gray-100 transition-colors duration-200"
                >
                  <Pencil className="text-gray-600 w-4 h-4" />
                </button>
              </div>
            </h3>

            <div className="flex flex-wrap gap-2">
              {currentUser?.desiredSkills?.length ? (
                currentUser.desiredSkills.map((desired) => (
                  <div
                    key={desired}
                    className="flex items-center gap-1 bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-cyan-200 transition"
                  >
                    <span>{desired}</span>
                    {isEditingDesired && (
                      <>

                        <button 
                        onClick={()=>{
                          handleDesiredDelete(desired)
                        }}
                        className="flex items-center justify-center w-5 h-5 rounded-full hover:bg-cyan-300 transition duration-150">
                          <Trash2 
                          
                          className="w-3 h-3 text-gray-600" />
                        </button>
                      </>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 italic text-sm">No desired skills yet</p>
              )}
            </div>

            {isDesiredAdding && (
              <form className="flex gap-2 mt-4" onSubmit={handleDesiredAdd}>
                <input
                  type="text"
                  value={newDesired}
                  onChange={(e) => setNewDesired(e.target.value)}
                  placeholder="Add a skill to learn"
                  className="px-3 py-2 rounded-lg border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 text-sm"
                />
                <button
                  type="submit"
                  className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition text-sm"
                >
                  Add
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
