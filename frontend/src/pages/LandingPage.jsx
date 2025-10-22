import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden text-gray-100">

      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-red-600 to-red-500 rounded-full blur-3xl opacity-15 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-br from-red-500 to-red-600 rounded-full blur-3xl opacity-20 animate-bounce-slower"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-br from-red-400 to-red-500 rounded-full blur-2xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
            <span className="text-red-400 text-sm font-semibold">✨ Your skills deserve better</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-6 leading-tight animate-fade-in">
            Share Skills.<br />Build Connections.
          </h1>
          <p className="text-gray-300 mb-4 text-xl font-medium animate-fade-in delay-200">
            SkillSwap is where ambitious professionals come to grow. Connect, learn, and collaborate with the best in your field.
          </p>
          <p className="text-gray-400 mb-8 text-lg animate-fade-in delay-300">
            Trade your expertise, learn from industry leaders, and build meaningful professional relationships. Real skills from real professionals—no fluff, just results.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to="/signup"
              className="group relative inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 animate-bounce-slow overflow-hidden"
            >
              <span className="relative z-10">Get Started Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
           
          </div>
        </div>

        {/* Right: 3D-ish illustration */}
        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
          <div className="relative w-96 h-96">
            {/* Floating cards */}
            <div className="absolute top-0 left-0 w-48 h-32 bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl border border-red-500/30 shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-500 p-4 animate-float">
              <div className="text-red-400 text-3xl mb-2">🚀</div>
              <div className="text-white font-bold">Learn Fast</div>
            </div>
            <div className="absolute top-20 right-0 w-48 h-32 bg-gradient-to-br from-red-600/20 to-red-500/20 backdrop-blur-md rounded-2xl border border-red-500/30 shadow-2xl transform -rotate-6 hover:-rotate-12 transition-transform duration-500 p-4 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-red-400 text-3xl mb-2">💎</div>
              <div className="text-white font-bold">Share Skills</div>
            </div>
            <div className="absolute bottom-10 left-1/4 w-48 h-32 bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-md rounded-2xl border border-red-500/30 shadow-2xl hover:scale-110 transition-transform duration-500 p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-red-400 text-3xl mb-2">⚡</div>
              <div className="text-white font-bold">Get Noticed</div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="py-8 px-6 max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center shadow-2xl">
          <div>
            <div className="text-5xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">10K+</div>
            <div className="text-gray-400 font-medium">Active Professionals</div>
          </div>
          <div>
            <div className="text-5xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-gray-400 font-medium">Skills Exchanged Weekly</div>
          </div>
          <div>
            <div className="text-5xl font-black bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-gray-400 font-medium">User Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-red-500/50 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative z-10">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Share Your Expertise</h3>
            <p className="text-gray-300 leading-relaxed">
              Showcase your talents and help others grow. Build your professional reputation, expand your network, and establish yourself as a trusted expert in your field.
            </p>
          </div>
        </div>

        <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-red-500/50 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-600/20 to-red-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative z-10">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Accelerate Your Growth</h3>
            <p className="text-gray-300 leading-relaxed">
              Learn from experienced professionals in your industry. Gain practical insights, develop new competencies, and stay ahead in your career with quality mentorship.
            </p>
          </div>
        </div>

        <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-red-500/50 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative z-10">
            <div className="text-5xl mb-4">💪</div>
            <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Build Meaningful Connections</h3>
            <p className="text-gray-300 leading-relaxed">
              Network with like-minded professionals and industry leaders. Exchange ideas, collaborate on impactful projects, and create relationships that drive mutual success.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 py-20 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-600/10 to-red-500/10 backdrop-blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent leading-tight">
            Ready to Elevate Your Career?
          </h2>
          <p className="text-xl text-gray-300 mb-4 font-medium">
            Join thousands of professionals who are investing in continuous growth.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            No credit card required. No commitments. Start your professional development journey today.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-black text-lg px-12 py-5 rounded-2xl shadow-2xl hover:shadow-red-500/50 hover:scale-110 transition-all duration-300"
          >
            Get Started Today →
          </Link>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-red-500 rounded-full animate-bounce-slow opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-red-500 rounded-full animate-bounce-slower opacity-60"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-60"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-xl py-8 text-center text-gray-400 border-t border-gray-800 relative z-10">
        <p className="mb-2">&copy; {new Date().getFullYear()} SkillSwap. Empowering Professional Growth.</p>
        <p className="text-sm">Built by professionals, for professionals who value continuous learning.</p>
      </footer>
    </div>
  );
};

export default LandingPage;