import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/Screens/HomePage'
import AboutPage from './components/Screens/AboutPage'
import ResumePage from './components/Screens/ResumePage'
import ServicesPage from './components/Screens/ServicesPage'
import SkillsPage from './components/Screens/SkillsPage'
import ProjectsPage from './components/Screens/ProjectsPage'
import MyBlogs from './components/Screens/MyBlogs'
import ContactPage from './components/Screens/ContactPage'


function App() {
  return (
    <div className='bg-black h-full'>
      <Navbar />
      <HomePage />
      <AboutPage />
      <ResumePage />
      <ServicesPage />
      <SkillsPage />
      <ProjectsPage />
      <MyBlogs />
      <ContactPage />
    </div>
  )
}

export default App