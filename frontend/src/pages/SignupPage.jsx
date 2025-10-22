import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";

const SignupPage = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const { signup } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      <div className="w-full max-w-md bg-gray-800 rounded-3xl shadow-2xl p-10 relative z-10">
        <h2 className="text-3xl font-extrabold text-center text-red-500 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Join SkillSwap to share your skills, learn from others, and grow your network.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-red-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Your Name"
                value={formData.username}
                className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-red-400 w-5 h-5" />
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-red-400 w-5 h-5" />
              <input
                type="password"
                placeholder="********"
                value={formData.password}
                className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-semibold transition-all shadow-md"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
