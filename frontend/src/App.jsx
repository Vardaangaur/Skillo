import React, { useEffect } from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import Navbar from './components/Navbar.jsx'
import {useAuthStore} from "./store/useAuthStore.js"
import {Loader} from "lucide-react"
import ProfilePage from './pages/ProfilePage.jsx'
import Footer from './components/Footer.jsx'
import LandingPage from './pages/LandingPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
const App = () => {
  const {checkAuth,isCheckingAuth,authUser} =useAuthStore();
  useEffect(()=>{checkAuth()},[checkAuth])
  if(isCheckingAuth){
    return <div className='flex items-center justify-center h-screen'>
      <Loader className='size-10 animate-spin'/>
    </div>
  }
  
  return (

    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/home" element={authUser?<HomePage/>:<Navigate to="/login"/>} />
        <Route path="/login" element={!authUser?<LoginPage/> :<Navigate to="/home"/>} />
        <Route path="/signup" element={!authUser?<SignupPage/> :<Navigate to="/home "/>} />
        <Route path='/profile' element={authUser? <ProfilePage/>  : <Navigate to="/login" />} />
      </Routes>

      <Footer/>
    </div>
    
  )
}

export default App