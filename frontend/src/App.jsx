import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import Navbar from './components/Navbar.jsx';
import { useAuthStore } from "./store/useAuthStore.js";
import { Loader } from "lucide-react";
import ProfilePage from './pages/ProfilePage.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';

const App = () => {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    checkAuth();
    // Optional: detect system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, [checkAuth]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (isCheckingAuth) {
    return (
      <div className='flex items-center justify-center h-screen bg-white dark:bg-gray-900'>
        <Loader className='size-10 animate-spin text-red-500'/>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
      {/* Optional dark mode toggle button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-5 right-5 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>

      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/home" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/home" />} />
        <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to="/home" />} />
        <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path='/about' element={authUser ? <AboutPage /> : <Navigate to="/login" />} />
        <Route path='/contact' element={authUser ? <ContactPage /> : <Navigate to="/login" />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
