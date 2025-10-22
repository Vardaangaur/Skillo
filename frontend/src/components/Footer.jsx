import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-900 mt-20 overflow-hidden text-gray-800 dark:text-gray-200">
      {/* Floating decorative shapes */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-300/20 dark:bg-red-500/20 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-red-200/20 dark:bg-red-600/20 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-extrabold text-red-500 dark:text-red-400 relative">
            SKILLO
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-pink-400 to-teal-400 rounded-full opacity-70 animate-pulse-slow"></span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 text-center md:text-left max-w-xs">
            Building the future, one skill at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-16 mt-6 md:mt-0">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Company</h4>
            <a
              href="/about"
              className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:scale-105 transition-all duration-300"
            >
              About
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Support</h4>
            <a
              href="/contact"
              className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:scale-105 transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          {[Facebook, Twitter, Linkedin, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:scale-125 transition-transform duration-300"
            >
              <Icon size={22} className="hover:drop-shadow-lg" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-200 dark:border-gray-700 mt-6 relative z-10">
        <p className="text-center text-gray-400 dark:text-gray-500 text-sm py-4">
          &copy; {new Date().getFullYear()} SKILLO. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
