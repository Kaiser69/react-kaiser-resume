import React from 'react'
import './app.css'
import About from './Components/About Section/About'
import Contact from './Components/Contact Section/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home Section/Home'
import Navbar from './Components/Navbar/Navbar'
import Project from './Components/Project Section/Project'
import Pitch from './Components/Pitch/Pitch'
import Skills from './Components/Skills Section/Skills'
import SupportEngine from './SuportEngine'
import Portfolio from './Components/Portfolio Section /Portfolio'


const App = () => {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Pitch/>
     <Skills/>
     <Portfolio/>
     <Project/>
     <Contact/>
     <Footer/>
     <SupportEngine/>
    </>
  )
}

export default App