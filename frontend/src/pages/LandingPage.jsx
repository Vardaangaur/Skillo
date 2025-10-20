import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 md:py-32">
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Unlock Your Skills. <br /> Connect. Learn. Grow.
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            SkillSwap lets you share what you know and learn what you want in a
            friendly, collaborative environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/signup"
              className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold text-lg hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-red-500 text-red-500 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-red-50 transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right: Illustration / Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-80 h-80 bg-red-100/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Share Your Skills</h3>
            <p className="text-gray-600">
              Teach what you know and help others grow. Build a reputation as an expert in your domain.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Learn Anything</h3>
            <p className="text-gray-600">
              Pick up new skills from others in the community. Discover new interests effortlessly.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Connect & Collaborate</h3>
            <p className="text-gray-600">
              Network with like-minded learners and creators. Collaborate on projects and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-500 py-20 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to start your learning journey?
        </h2>
        <Link
          to="/signup"
          className="bg-white text-red-500 px-8 py-3 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
        >
          Sign Up Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
