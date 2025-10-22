import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      
      {/* Animated floating shapes */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-red-700/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-red-600/20 rounded-full animate-spin-slower"></div>
      <div className="absolute bottom-10 left-16 w-24 h-24 bg-red-500/10 rounded-full animate-bounce-slow"></div>

      <div className="w-full max-w-md bg-gray-800 rounded-3xl shadow-2xl p-10 relative z-10">
        {/* Greeting */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-red-500 mb-2 animate-fade-in">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-300 mb-8 animate-fade-in delay-100">
          Let’s dive in! Connect with amazing professionals, learn new skills, and grow together.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-red-400 w-5 h-5" />
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-gray-700 text-gray-100 transition"
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
                className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-gray-700 text-gray-100 transition"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-red-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-semibold transition-all shadow-md"
          >
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-300 mt-6">
          New here?{" "}
          <a href="/signup" className="text-red-500 hover:underline font-medium">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
