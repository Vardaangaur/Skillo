import React, { useState, useRef, useEffect } from "react";
import { CircleUserRound, User,Menu, X  } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setOpenDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 transition-shadow duration-300 hover:shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center gap-30">
            
            {/* Logo */}
            <NavLink
              to="/home"
              className="text-red-500 font-bold text-xl transition-transform duration-300 hover:scale-110 hover:text-red-600"
            >
              SKILLO
            </NavLink>

            {/* Links */}
            <div className="hidden md:flex space-x-6 items-center">
              {!authUser && (
                <>
                  <Link
                    to="/login"
                    className="flex items-center text-gray-700 hover:text-red-500 transition-all duration-300 hover:scale-105"
                  >
                    <User className="w-5 h-5 mr-1 animate-bounce-slow" /> Login
                  </Link>
                  <Link
                    to="/signup"
                    className="flex items-center text-gray-700 hover:text-red-500 transition-all duration-300 hover:scale-105"
                  >
                    <User className="w-5 h-5 mr-1 animate-bounce-slow" /> Signup
                  </Link>
                </>
              )}

              {authUser && (
                <div className="relative" ref={dropdownRef}>
                  {/* Profile Button */}
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="flex items-center text-gray-700 p-2 rounded-full transition-transform duration-200 hover:scale-110 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <CircleUserRound size={25} className="mr-1 text-red-500 animate-pulse-slow" />
                    <span className="hidden md:inline font-medium text-gray-700">Hi, {authUser.username}</span>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg z-50 transform transition-all duration-300 origin-top-right
                      ${openDropdown ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                    `}
                  >
                    <Link
                      to="/profile"
                      className="block w-full text-left px-4 py-2 hover:bg-red-50 transition-colors duration-200"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-red-50 transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Padding so content doesn't go under navbar */}
      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;
