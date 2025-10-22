import React, { useEffect, useState, useRef } from "react";
import UserCard from "../components/UserCard.jsx";
import { useUserStore } from "../store/useUserStore.js";

const HomePage = () => {
  const { getAllUsers, allUsers } = useUserStore();
  const [searchQuery, setSearchQuery] = useState("");
  const cardsRef = useRef(null);

  useEffect(() => {
    getAllUsers();
  }, []);

  const filteredUsers = allUsers.filter((user) => {
    const term = searchQuery.toLowerCase();
    const usernameMatch = user.username.toLowerCase().includes(term);
    const emailMatch = user.email.toLowerCase().includes(term);
    const skillsMatch = user.skills.some((s) =>
      s.name.toLowerCase().includes(term)
    );
    const desiredMatch = user.desiredSkills.some((s) =>
      s.toLowerCase().includes(term)
    );
    return usernameMatch || emailMatch || skillsMatch || desiredMatch;
  });

  useEffect(() => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-teal-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-red-400/10 to-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Hero Section */}
      <section className="py-24 px-6 text-center relative z-10">
        <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-red-500/10 to-red-600/10 dark:from-red-500/20 dark:to-red-600/20 rounded-full border border-red-500/20 backdrop-blur-sm">
          <span className="text-red-500 dark:text-red-400 text-sm font-semibold">✨ Your Professional Network</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500 bg-clip-text text-transparent mb-6">
          Connect. Learn. Grow.
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium">
          Explore a vibrant network of skilled professionals, discover expertise, and foster meaningful collaborations.
        </p>
        <div className="flex justify-center mb-6">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search users, skills, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border-2 border-red-300/50 dark:border-red-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-gray-400 dark:placeholder-gray-500 text-gray-700 dark:text-gray-100 transition-all duration-300 hover:shadow-xl"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 dark:text-red-400">
              🔍
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 border border-gray-200 dark:border-gray-700/50 hover:border-red-500/30 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500 bg-clip-text text-transparent mb-3 relative z-10">{allUsers.length}</h2>
            <p className="text-gray-600 dark:text-gray-300 font-semibold relative z-10">Active Professionals</p>
          </div>
          <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 border border-gray-200 dark:border-gray-700/50 hover:border-red-500/30 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500 bg-clip-text text-transparent mb-3 relative z-10">50+</h2>
            <p className="text-gray-600 dark:text-gray-300 font-semibold relative z-10">Skills Represented</p>
          </div>
          <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 border border-gray-200 dark:border-gray-700/50 hover:border-teal-500/30 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-teal-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 bg-clip-text text-transparent mb-3 relative z-10">100+</h2>
            <p className="text-gray-600 dark:text-gray-300 font-semibold relative z-10">Collaborative Projects</p>
          </div>
        </div>
      </section>

      {/* User Cards */}
      <section ref={cardsRef} className="px-6 py-10 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
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
            <div className="col-span-full text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-500 dark:text-gray-400 font-semibold">
                No users found for "{searchQuery}"
              </p>
              <p className="text-gray-400 dark:text-gray-500 mt-2">
                Try adjusting your search terms
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer Section */}
      <section className="mt-20 py-16 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 text-white text-center rounded-t-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Build Meaningful Connections
          </h2>
          <p className="text-lg md:text-xl mb-8 text-red-50 font-medium">
            Our platform empowers professionals to share knowledge, showcase skills, and collaborate on impactful projects.
          </p>
          <div className="flex gap-4 justify-center">
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;