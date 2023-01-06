import React from 'react'
import './home.scss'

import {AiFillGithub} from 'react-icons/ai'
import {FiLinkedin} from 'react-icons/fi'
import {FiYoutube} from 'react-icons/fi'

import {TbArrowBigRightLines} from 'react-icons/tb'
import {FiChevronsDown} from 'react-icons/fi'

const Home = () => {
  return (
    <section id='home' className='home section'>
      
    <div  className="leftIcons">
      <div id='leftIcons' className="socials grid">
        <a href='https://kaiser69.github.io/resume.io/' target='_blank' rel="noreferrer">
          <AiFillGithub className='icon '/>
        </a>
        <a href='https://linkedin.com/in/kaiser-a-özhun' target='_blank' rel="noreferrer">
          <FiLinkedin className='icon'/>
        </a>
        <a href='https://www.youtube.com/channel/UCuA8fAUREGlVakisq3ako6Q' target='_blank' rel="noreferrer">
          <FiYoutube className='icon'/>
        </a>
        <div className="line"></div>
      </div>
    </div>

    <div className="container homeContainer">
      <span className="introText">
        Hello my name is, 
      </span>
      <h1 className='title'>
       Kaiser A ÖzHun
      </h1>

      <span className="subTitle">
        I am front-end developer and I develop scalable web based applications and software.
      </span>
         <p className="homeParagraph">
           I code within required coding standards  and styles to serve the exact need.
         </p>

         <div className="lowerHomeSection">
          <button className="contactBtn ">
              <a href="#contact" className="flex">
                Contact Me  <TbArrowBigRightLines className='icon'/>
              </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className="scroll">Scroll Down</h6> <FiChevronsDown className='icon'/>
            </a>
          </div>
         </div>
    </div>

    <div className="rightEmail">
      <div>
         <div className="emailAddress">
             <a href="mailto:pen1921@gmail.com"
             target='_blank' rel="noreferrer">
             <h4> Ask on live chat support</h4>
             </a>
         </div>

         <div className="line"></div>
      </div>
    </div>
    </section>
  )
}

export default Home