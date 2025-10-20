import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-[#fe424d]">SKILLO</h2>
          <p className="text-gray-500 text-sm mt-1 text-center md:text-left">
            Building the future, one skill at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-16 mt-4 md:mt-0">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-gray-800">Company</h4>
            <a href="#" className="text-gray-500 hover:text-[#fe424d] transition-colors">About</a>
            <a href="#" className="text-gray-500 hover:text-[#fe424d] transition-colors">Careers</a>
            <a href="#" className="text-gray-500 hover:text-[#fe424d] transition-colors">Blog</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-gray-800">Support</h4>
            <a href="#" className="text-gray-500 hover:text-[#fe424d] transition-colors">Contact</a>
            <a href="#" className="text-gray-500 hover:text-[#fe424d] transition-colors">Help Center</a>
            <a href="#" className="text-gray-500 hover:text-[#fe424d] transition-colors">Privacy Policy</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-[#fe424d] transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-[#fe424d] transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-[#fe424d] transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:hello@skillo.com" className="text-gray-500 hover:text-[#fe424d] transition-colors"><Mail size={20} /></a>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6">
        <p className="text-center text-gray-400 text-sm py-4">
          &copy; {new Date().getFullYear()} SKILLO. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
