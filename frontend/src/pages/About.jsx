import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 text-gray-200">
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <h1 className="text-4xl font-extrabold text-center text-red-500 drop-shadow-lg">
          About Skillo
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed text-center">
          Skillo is a skill exchange platform where learners and experts connect
          to grow together. Whether you want to learn something new or teach
          what you know, Skillo makes skill-sharing simple, fun, and interactive.
        </p>

        {/* Mission Card */}
        <div className="relative bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
          {/* Floating Accent Shapes */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-teal-400/20 rounded-full blur-2xl animate-bounce-slower"></div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-red-500 mb-2">
                Our Mission
              </h2>
              <p className="text-gray-300">
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
        </div>

        {/* Vision Card */}
        <div className="relative bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
          {/* Floating Accent Shapes */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-teal-400/20 rounded-full blur-2xl animate-bounce-slower"></div>

          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-pink-500 mb-2">
                Our Vision
              </h2>
              <p className="text-gray-300">
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
      </div>
    </div>
  );
};

export default AboutPage;
