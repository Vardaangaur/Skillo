import { create } from "zustand";
import { axiosInstance } from "../utils/axiosInstance";
import toast from "react-hot-toast";

export const useSkillStore = create((set) => ({
  skills: [],
  desiredSkills: [],

  getMySkill: async () => {
    try {
      const res = await axiosInstance.get("/skills/");
      set({ skills: res.data });
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  },

  addSkill: async (data) => {
    try {
      const res = await axiosInstance.post("/skills/", data);
      set((state) => ({
        skills: [...state.skills, res.data],                                  //to use skill in this function this is syntax
      }));
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  },
  addDesired: async (data) => {
    try {
      const res = await axiosInstance.post("/desired/", data);
      set((state) = ({
        desiredSkills: res.data
      }))
    } catch (error) {
      console.error("Error desired skill:", error);
    }
  },
  updateSkill: async (updatedData, id) => {
    try {
      const res = await axiosInstance.put(`/skills/${id}`, updatedData)
      set((state) => ({
        skills: state.skills.map((skill) =>
          skill._id === id ? res.data.skill : skill
        )
      }));

    } catch (error) {
      console.error("Error updating skill:", error);
    }
  },
  removeSkill:async(id)=>{
    try {
      const res=await axiosInstance.delete(`/skills/${id}`)
      console.log(res)
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  },
  removeDesired:async(name)=>{
    try {
      const res=await axiosInstance.delete("/desired",{ data: { name } })
      console.log(res);
    } catch (error) {
      console.error("Error deleting desired:", error);
    }
  }
}));
