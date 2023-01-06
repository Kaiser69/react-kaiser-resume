import React from 'react'
import'./about.scss'
import {TbCloudDownload }from 'react-icons/tb'
import CV from '../../pdf/CV.pdf'
import Kai from '../../img/kai.jpg'


const About = () => {
  return (
    <section id='about' className='about section container'>
      <div className="sectionTitle">
        <span className="titleNumber">01 .</span>
          <h5 className="titleText">
            About Me
            <div className="underline"><span></span></div>
          </h5>
      </div>

     <div className="sectionContent grid">
      <div className="textSection">

        <h4>
          I'm a success-driven, determined front-end and Web developer.
          I have experience using HTML Sass Javascript, JavaScript frameworks, and code libraries to designing User 
          Interface (UI) applications and professional web application system and to build accessible component- 
          based web pages. <br/> Ability to deliver quality results while collaborating rapidly changing work 
          environments and team compositions. <br/>
          Passionate and driven to learn more skills. Determined and result oriented.
          
        </h4>

        <div className="aboutBtn" >
          <a href={CV}  download={CV}
          className="flex">
            Download CV <TbCloudDownload className="icon"/>
          </a>
        </div>
      </div>

      <div className="aboutImgDiv">
        <img src={Kai} alt="Kaiser" className="aboutImg" />
      </div>

     </div>

      </section>
  )
}

export default About