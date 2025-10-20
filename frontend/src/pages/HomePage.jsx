import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard.jsx';
import { useUserStore } from '../store/useUserStore.js';

const HomePage = () => {
  const { getAllUsers, allUsers } = useUserStore();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  // Filter users by username, skills, desired skills, or email
  const filteredUsers = allUsers.filter((user) => {
    const term = searchQuery.toLowerCase();

    const usernameMatch = user.username.toLowerCase().includes(term);
    const emailMatch = user.email.toLowerCase().includes(term);
    const skillsMatch = user.skills.some((s) => s.name.toLowerCase().includes(term));
    const desiredMatch = user.desiredSkills.some((s) => s.toLowerCase().includes(term));

    return usernameMatch || emailMatch || skillsMatch || desiredMatch;
  });

  return (
    <>
      {/* Sticky Search Bar */}
      <div className="fixed top-16 left-0 w-full z-50 p-6 flex justify-center backdrop-blur-md bg-white/70 shadow-md">
        <div className="relative w-full md:w-1/2">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-red-400 text-xl">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search users, skills, or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-12 py-3 rounded-xl bg-white shadow-lg border border-gray-200
                       focus:border-red-400 focus:ring-2 focus:ring-red-200 text-gray-700
                       placeholder-gray-400 font-medium text-sm transition-all duration-300
                       hover:shadow-2xl hover:scale-105 focus:shadow-xl"
          />
          {/* Fancy animated gradient underline */}
          <span className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-red-400 to-blue-400 rounded-full opacity-50 blur-xl animate-pulse-slow"></span>
          {/* Sparkles */}
          <span className="absolute top-1/4 left-1/3 w-2 h-2 bg-red-300 rounded-full animate-bounce-slow opacity-70"></span>
          <span className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce-slower opacity-60"></span>
        </div>
      </div>

      {/* User Cards */}
      <div className="p-6 pt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard
              key={user._id}
              id={user.id}
              username={user.username}
              skills={user.skills}
              desiredSkills={user.desiredSkills}
              email={user.email}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full mt-10">
            No users found for "{searchQuery}"
          </p>
        )}
      </div>
    </>
  );
};

export default HomePage;
