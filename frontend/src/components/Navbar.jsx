import React, { useState, useRef, useEffect } from "react";
import { CircleUserRound, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [darkMode, setDarkMode] = useState(() => 
    localStorage.getItem("darkMode") === "true"
  );

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setOpenDropdown(false);
  };

  // Close dropdown if clicked outside
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
      <nav className="bg-white/90 backdrop-blur-sm shadow-md fixed top-0 left-0 w-full z-50 transition-shadow duration-300 hover:shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center gap-30">
            {/* Logo */}
            <NavLink
              className="text-red-500 font-bold text-xl transition-transform duration-200 hover:scale-110 hover:text-red-600"
              to="/home"
            >
              SKILLO
            </NavLink>

            {/* Links */}
            <div className="hidden md:flex space-x-6 items-center">
              {!authUser && (
                <>
                  <Link
                    className="flex items-center text-gray-700 hover:text-red-500 transition-all duration-300 hover:scale-105"
                    to="/login"
                  >
                    <User className="w-5 h-5 mr-1" /> Login
                  </Link>
                  <Link
                    className="flex items-center text-gray-700 hover:text-red-500 transition-all duration-300 hover:scale-105"
                    to="/signup"
                  >
                    <User className="w-5 h-5 mr-1" /> Signup
                  </Link>
                </>
              )}

              {authUser && (
                <div className="relative" ref={dropdownRef}>
                  {/* Profile Button */}
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="flex items-center text-gray-700 p-2 rounded-full transition-transform duration-200 hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <CircleUserRound size={25} className="mr-1 text-red-500" />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg z-50 transform transition-all duration-300 origin-top-right
                      ${openDropdown ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                    `}
                  >
                    <Link
                      to="/profile"
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
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
