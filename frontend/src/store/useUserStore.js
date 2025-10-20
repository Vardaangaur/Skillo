import { create } from "zustand";
import { axiosInstance } from "../utils/axiosInstance.js";

export const useUserStore = create((set) => ({
  currentUser: null,
  allUsers: [],
  selectedUser: null,

  // Fetch logged-in user
  getUser: async () => {
    try {
      const res = await axiosInstance.get("/users/me");
      set({ currentUser: res.data });
      console.log(res.data);
      
    } catch (error) {
      console.error("Error fetching current user:", error.message);
    }
  },

  // Fetch all users
  getAllUsers: async () => {
    try {
      const res = await axiosInstance.get("/users");
      console.log(res.data);
      set({ allUsers: res.data });
    } catch (error) {
      console.error("Error fetching all users:", error.message);
    }
  },

  // Fetch a single user by ID
  getUserById: async (id) => {
    try {
      const res = await axiosInstance.get(`/users/${id}`);
      set({ selectedUser: res.data });
    } catch (error) {
      console.error("Error fetching user by ID:", error.message);
    }
  },


}));
