import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Dummy functionality)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 text-gray-200">
      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        <h1 className="text-4xl font-extrabold text-center text-red-500 drop-shadow-lg">
          Contact Us
        </h1>

        <p className="text-gray-300 text-center">
          Have a question, feedback, or suggestion? Fill out the form below and
          we'll get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-3xl shadow-2xl space-y-6 border border-gray-700 relative overflow-hidden"
        >
          {/* Floating Accent Shapes */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-teal-400/20 rounded-full blur-2xl animate-bounce-slower"></div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 rounded-xl p-3 bg-gray-900 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-red-500 outline-none transition-all duration-300"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 rounded-xl p-3 bg-gray-900 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-red-500 outline-none transition-all duration-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-600 rounded-xl p-3 bg-gray-900 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-red-500 outline-none transition-all duration-300"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-red-500 via-pink-500 to-teal-400 text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
