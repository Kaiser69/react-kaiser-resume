import React, {useState} from 'react'
import './navbar.css'
import './Navbar.scss'
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {

  const [active, setActive] = useState('navBar')

  const showNavBar = () =>{
    setActive('navBar activeNavBar')
  }


  const removeNavBar = () =>{
    setActive('navBar')
  }
  
// statement to add a background color to header. 
  const [activeHeader, setActiveHeader] = useState('header')
  const addBg = () =>{
    if(window.scrollY >= 10){
      setActiveHeader('header activeHeader')
    }
    else{
      setActiveHeader('header')
    }
  }

  window.addEventListener('scroll', addBg)

  return (
    <header className={activeHeader}>
        <div className='logoDiv'>
        <h1 className='logo'><a href='#home'>Kaiser Ai.</a>
         </h1>
        </div>    
      <div className={active}>
        <ul onClick={removeNavBar} className="navList">
              <li className="navItem">
                  <a href="#about" className="navLink">
                  
                  <span className='headerNumber'>1 .</span> About
                  </a>
              </li>
              <li className="navItem">
                  <a href="#skill" className="navLink">
                  <span className='headerNumber'>2 .</span> Skills</a>
              </li>
              <li className="navItem">
                  <a href="#project" className="navLink">
                  <span className='headerNumber'>3 .</span> Projects </a>
              </li>
              <li className="navItem">
                  <a href="#contact" className="navLink">
                  <span className='headerNumber'>4 .</span> Contact</a>
              </li>
              
              <button className='btn' >
                <a href="https://kaiser69.github.io/resume.io/" target="_blank" rel="noreferrer" 
                 className="href">Resume</a>
              </button>

             
        </ul>
        <div onClick={removeNavBar}
        className="closeNavbar">
              <AiFillCloseCircle className="icon" />
              </div>
      </div>


        <div onClick={showNavBar} className="toggleNavBar">
          <TbGridDots className="icon" />
        </div>

    </header>
  )
}

export default Navbar