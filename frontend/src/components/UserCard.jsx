import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ username, email, skills, desiredSkills }) => {
  return (
    <div className="relative max-w-xs bg-white rounded-2xl shadow-md p-6 border border-gray-200 
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      
      {/* Soft decorative elements */}
      <div className="absolute -top-16 -right-16 w-36 h-36 bg-red-100/20 rounded-full blur-2xl transition-transform duration-500 group-hover:rotate-12"></div>
      <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-blue-50/20 rounded-full blur-2xl transition-transform duration-500 group-hover:-rotate-12"></div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* User Icon */}
        <div className="bg-gray-100 h-28 flex items-center justify-center rounded-xl mb-5 border border-gray-200 shadow-inner 
                        group-hover:scale-105 transition-transform duration-300">
          <span className="text-gray-600 text-3xl font-bold">{username.charAt(0)}</span>
        </div>

        {/* Username */}
        <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">{username}</h3>

        {/* Email */}
        {email && (
          <p className="text-sm text-gray-500 mb-3 text-center truncate">
            {email}
          </p>
        )}

        <div className="h-0.5 w-12 bg-red-200 mx-auto mb-4 rounded-full"></div>

        {/* Skills They Have */}
        <div className="mt-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-1 h-1 bg-red-300 rounded-full"></span>
            Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill._id}
                className="px-3 py-1.5 bg-red-50 text-red-700 text-xs rounded-full border border-red-100 
                           hover:bg-red-100 hover:scale-105 transition-all duration-300 font-medium cursor-pointer"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Skills They Want */}
        <div className="mt-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
            Wants to Learn
          </h4>
          <div className="flex flex-wrap gap-2">
            {desiredSkills.map((desired, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100 
                           hover:bg-blue-100 hover:scale-105 transition-all duration-300 font-medium cursor-pointer"
              >
                {desired}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
