import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard.jsx';
import { axiosInstance } from '../utils/axiosInstance.js';
import { useUserStore } from '../store/useUserStore.js';

const HomePage = () => {

  const { getAllUsers, allUsers } = useUserStore();
  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allUsers.map((user) => (
          <UserCard
            key={user._id}
            username={user.username}
            skills={user.skills}
            desiredSkills={user.desiredSkills}
          />
        ))}
      </div>

    </div>
  );
};

export default HomePage;
