import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-red-600 text-center">
        About Skillo
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed">
        Skillo is a skill exchange platform where learners and experts connect
        to grow together. Whether you want to learn something new or teach
        what you know, Skillo makes skill-sharing simple, fun, and interactive.
      </p>

      <div className="bg-red-50 p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-red-700 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To empower individuals by connecting knowledge seekers with experts,
            fostering a community of learning and collaboration.
          </p>
        </div>
        <div className="flex-1 text-center">
          <img
            src="https://img.icons8.com/emoji/96/000000/books-emoji.png"
            alt="Learning"
            className="mx-auto animate-bounce-slow"
          />
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-2xl shadow-md flex flex-col md:flex-row-reverse gap-6 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Our Vision</h2>
          <p className="text-gray-700">
            Build a global platform where sharing skills and knowledge is as
            easy as connecting with friends, making learning accessible to
            everyone.
          </p>
        </div>
        <div className="flex-1 text-center">
          <img
            src="https://img.icons8.com/emoji/96/000000/globe-showing-americas-emoji.png"
            alt="Vision"
            className="mx-auto animate-pulse-slow"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
