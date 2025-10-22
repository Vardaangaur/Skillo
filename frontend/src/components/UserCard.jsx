import React from "react";

const UserCard = ({ username, email, skills, desiredSkills }) => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group border border-gray-200 dark:border-gray-700/50 hover:border-red-500/30 hover:-translate-y-2">
      
      {/* Animated background accent */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-teal-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative p-6 h-full flex flex-col z-10">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-red-500 to-red-600 h-16 w-16 flex items-center justify-center rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <span className="text-3xl font-black text-white">
                {username.charAt(0)}
              </span>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-black bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-1 truncate group-hover:from-red-600 group-hover:to-red-500 dark:group-hover:from-red-400 dark:group-hover:to-red-300 transition-all duration-300">
              {username}
            </h3>
            {email && (
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                {email}
              </p>
            )}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-5 flex-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Skills
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills && skills.length > 0 ? (
              skills.map((skill) => (
                <span
                  key={skill._id}
                  className="px-3 py-1.5 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/40 text-red-600 dark:text-red-400 text-xs rounded-lg font-bold hover:from-red-500 hover:to-red-600 hover:text-white dark:hover:from-red-600 dark:hover:to-red-700 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 cursor-pointer border border-red-200 dark:border-red-800/50"
                >
                  {skill.name}
                </span>
              ))
            ) : (
              <p className="text-xs text-gray-400 dark:text-gray-500 italic">
                No skills added yet.
              </p>
            )}
          </div>
        </div>

        {/* Desired Skills Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full"></div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Wants to Learn
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {desiredSkills && desiredSkills.length > 0 ? (
              desiredSkills.map((desired, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-900/40 text-teal-600 dark:text-teal-400 text-xs rounded-lg font-bold hover:from-teal-500 hover:to-teal-600 hover:text-white dark:hover:from-teal-600 dark:hover:to-teal-700 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 cursor-pointer border border-teal-200 dark:border-teal-800/50"
                >
                  {desired}
                </span>
              ))
            ) : (
              <p className="text-xs text-gray-400 dark:text-gray-500 italic">
                No desired skills yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
