import React from 'react'
import './skills.scss'

import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {SiCss3} from 'react-icons/si'
import {FaHtml5} from 'react-icons/fa'
import {CgFigma} from 'react-icons/cg'
import {SiAdobexd} from 'react-icons/si'
import {SiAdobephotoshop} from 'react-icons/si'
import {AiOutlineSketch}from 'react-icons/ai'
import {FaGithub}from 'react-icons/fa'
import {FaGitAlt}from 'react-icons/fa'
import {SiMysql}from 'react-icons/si'
import {BsWordpress}from 'react-icons/bs'




const Skills = () => {
  return (
    <section id='skill' className='skills container section'>
  
     <div className="sectionTitle">
      <span className="titleNumber">
        02 .
      </span>
      <h5 className="titleText">
        Skills
        <div className="underline">
          <span>   </span>
        </div>
      </h5>
     </div>

     {/** skills container **/}

     <div className="skillsContainer grid">
         <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">
            Frontend Development
            </h2>
               <span className="subTitle">
                7 year Experience
               </span>
          </div>
  
          <div className="generalSkills">

              <div className="singleSkill">
                  <div className="iconBox flex">
                     <IoLogoJavascript className="icon"
                     style={{color:"#FFD700" , fontSize:"31px"}}
                     />
                  </div>
                  <span className="skillName">Javascript</span>
              </div>

              <div className="singleSkill">
                  <div className="iconBox flex">
                     <FaReact className="icon"
                     style={{color:"#00d4fa", fontSize:"31px"}}
            
                     />
                  </div>
                  <span className="skillName">React</span>
              </div>

              <div className="singleSkill">
                  <div className="iconBox flex">
                     <SiCss3 className="icon"
                              style={{color:"#00d3fa", fontSize:"31px"}}
                     />
                  </div>
                  <span className="skillName">CSS3</span>
              </div>

              <div className="singleSkill">
                  <div className="iconBox flex">
                     <FaHtml5 className="icon"
                              style={{color:"#EB5406", fontSize:"31px"}}
                              />
                  </div>
                  <span className="skillName">HTML5</span>
              </div>

          </div>

         </div>
          
         <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">
              UI/UX Designer
            </h2>
               <span className="subTitle">
                7 year Experience
               </span>
          </div>
  
          <div className="generalSkills">

              <div className="singleSkill">
                  <div className="iconBox flex">
                     <CgFigma className="icon"
                              style={{fontSize:"31px"}}
                              />
                  </div>
                  <span className="skillName">Figma</span>
              </div>

              <div className="singleSkill">
                  <div className="iconBox flex">
                     <SiAdobexd className="icon"
                              style={{color:"#EE82EE", fontSize:"31px"}}
                              />
                  </div>
                  <span className="skillName">XD</span>
              </div>

              <div className="singleSkill">
                  <div className="iconBox flex">
                     <SiAdobephotoshop className="icon"
                              style={{color:"#5CB3FF", fontSize:"31px"}}
                              />
                  </div>
                  <span className="skillName">Photoshop</span>
              </div>

              <div className="singleSkill">
                  <div className="iconBox flex">
                     <AiOutlineSketch className="icon"
                              style={{color:"#FFD700", fontSize:"31px"}}
                              />
                  </div>
                  <span className="skillName">Sketch</span>
              </div>
          </div>

         </div>

            <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
               <span className="subTitle">
                7 year Experience
               </span>
          </div>
  
          <div className="generalSkills">

              <div className="singleSkill">
                  <div className="iconBox flex">
                     <FaGithub className="icon"
                              style={{fontSize:"31px"}}
                              />
                  </div>
                  <span className="skillName">Github</span>
              </div>

              <div className="singleSkill">
                  <div className="iconBox flex">
                     <FaGitAlt className="icon"
                              style={{color:"#ff6600", fontSize:"31px"}}
                              />
                  </div>
                  <span className="skillName">Git</span>
              </div>

              <div className="singleSkill">
                  <div className="iconBox flex">
                     <SiMysql className="icon"
                              style={{color:"#00d4fa", fontSize:"31px"}}
                              />
                  </div>
                  <span className="skillName">Mysql</span>
              </div>

              <div className="singleSkill">
                  <div className="iconBox flex">
                     <BsWordpress className="icon"
                              style={{color:"#00d4fa", fontSize:"31px"}}
                              />
                  </div>
                  <span className="skillName">Wordpress</span>
              </div>

          </div>

         </div>

     </div>
      
      </section>
  )
}

export default Skills