import React, { useState, useRef, useEffect } from "react";
import { CircleUserRound, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [openDropdown, setOpenDropdown] = useState(false);
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
      <nav className="bg-gray-900/95 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 transition-shadow duration-300 hover:shadow-2xl border-b border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center gap-30">

            {/* Logo */}
            <NavLink
              to="/home"
              className="text-red-600 font-extrabold text-3xl md:text-4xl tracking-wide transition-all duration-300 hover:scale-110 hover:text-red-700 drop-shadow-xl"
            >
              SKILLO
            </NavLink>

            {/* Links */}
            <div className="hidden md:flex space-x-6 items-center">
              {!authUser && (
                <>
                  <Link
                    to="/login"
                    className="flex items-center text-gray-200 hover:text-red-500 transition-all duration-300 hover:scale-105 relative group"
                  >
                    <User className="w-5 h-5 mr-1 animate-bounce-slow text-red-500" />
                    Login
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 via-pink-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
                  </Link>
                  <Link
                    to="/signup"
                    className="flex items-center text-gray-200 hover:text-red-500 transition-all duration-300 hover:scale-105 relative group"
                  >
                    <User className="w-5 h-5 mr-1 animate-bounce-slow text-red-500" />
                    Signup
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 via-pink-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
                  </Link>
                </>
              )}

              {authUser && (
                <div className="relative" ref={dropdownRef}>
                  {/* Profile Button */}
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="flex items-center text-gray-200 p-2 rounded-full transition-transform duration-200 hover:scale-110 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 relative group"
                  >
                    <CircleUserRound size={25} className="mr-1 text-red-500 animate-pulse-slow" />
                    <span className="hidden md:inline font-medium">Hi, {authUser.username}</span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 via-pink-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute right-0 mt-2 w-44 bg-gray-800 rounded-xl shadow-xl z-50 transform transition-all duration-300 origin-top-right
                      ${openDropdown ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
                    `}
                  >
                    <Link
                      to="/profile"
                      className="block w-full text-left px-4 py-2 hover:bg-red-700 hover:scale-105 transition-all duration-200 text-gray-200"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-red-700 hover:scale-105 transition-all duration-200 text-gray-200"
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
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
