import React from 'react'
import './project.scss'

import {AiFillYoutube} from 'react-icons/ai'
import {FaGithub}from 'react-icons/fa'

import img from '../../img/PIZZA.jpg'
import img1 from '../../img/porfilio.png'
import img2 from '../../img/appstore.png'
import img3 from '../../img/aitech.png'
import img4 from '../../img/ui_app.png'
import img5 from '../../img/ui.png'

const data =[
{
  id:   1,
  image: img,
  demo: 'https://kaiser69.github.io/resume.io/',
  liveLink: ' ',
  github: 'https://kaiser69.github.io/resume.io/',
  title: 'Responsive resume github  repository',
  desc:'This is a personal online resume of frontend and ui/ux developer. Web site push online by github  repository file. Please visit ',
  tech1:'Html',
  tech2:'Css',
  tech3:'Javascript',
  tech4:'jQuery',
  tech5:'Mailer JS',
},

{
  id:   2,
  image: img1,
  demo: 'https://xd.adobe.com/spec/fb6f2295-23d6-4a22-44ab-b9f672430a26-8d5e/?fullscreen',
  liveLink: ' ',
  github: 'https://xd.adobe.com/spec/fb6f2295-23d6-4a22-44ab-b9f672430a26-8d5e/?fullscreen',
  title: 'Personal portfolio - Adobe online ',
  desc:'This is a personal online portfolio of ui/ux developer and designer. Build by using Adobe XD, Ps and Ai tools. Please visit ',
  tech1:'XD',
  tech2:'Ps',
  tech3:'Ai',
  tech4:'Adobe cloud',
  tech5:'',
},

{
  id:   3,
  image: img2,
  demo: 'https://appadvice.com/app/uyghur-voice-radio/1364894849',
  liveLink: ' ',
  github: 'https://appadvice.com/app/uyghur-voice-radio/1364894849',
  title: 'iOS App on App store - online Radio',
  desc:'This is iOS app on app store. Uyghur Voice Radio - App brings you the latest, breaking news from our trusted network. There is big story to tell you and lots of small ones one. ',
  tech1:'Swift',
  tech2:'Xcode',
  tech3:'SwiftUI',
  tech4:'Objective-C',
  tech5:'',
},

{
  id:   4,
  image: img3,
  demo: 'https://xd.adobe.com/view/756ee771-85b0-4150-9cac-27e4c8adcf8d/screen/d8f0cdcd-1718-41e4-823c-b23ef180f32c?fullscreen',
  liveLink: ' ',
  github: 'https://xd.adobe.com/view/756ee771-85b0-4150-9cac-27e4c8adcf8d/screen/d8f0cdcd-1718-41e4-823c-b23ef180f32c?fullscreen',
  title: 'Redesign services',
  desc:'I am UI/UX expert, I can redesign your software product for unprecedented performance and efficiency',
  tech1:'Html',
  tech2:'Css',
  tech3:'Javascript',
  tech4:'jQuery',
  tech5:'Mailer JS',
},

{
  id:   5,
  image: img4,
  demo: 'https://xd.adobe.com/spec/fb6f2295-23d6-4a22-44ab-b9f672430a26-8d5e/screen/79c0b970-0d14-466e-9b3f-f24a26de2638?fullscreen',
  liveLink: ' ',
  github: 'https://xd.adobe.com/spec/fb6f2295-23d6-4a22-44ab-b9f672430a26-8d5e/screen/79c0b970-0d14-466e-9b3f-f24a26de2638?fullscreen' ,
  title: 'UX-research',
  desc:'The customer already had the idea of what the application design should be. Feel the difference between projects with UI/UX designers involved and projects without them.',
  tech1:'Html',
  tech2:'Css',
  tech3:'Javascript',
  tech4:'jQuery',
  tech5:'Mailer JS',
}
,

{
  id:   6,
  image: img5,
  demo: 'https://xd.adobe.com/spec/fb6f2295-23d6-4a22-44ab-b9f672430a26-8d5e/screen/6ed2ffd0-ec8f-469a-a441-45a4cadecba8?fullscreen',
  liveLink: ' ',
  github: 'https://xd.adobe.com/spec/fb6f2295-23d6-4a22-44ab-b9f672430a26-8d5e/screen/6ed2ffd0-ec8f-469a-a441-45a4cadecba8?fullscreen',
  title: 'UI-system',
  desc:'Together with the customer, I created the most suitable interface for the business software: card-based design, burger menu, simple icons, the minimum number of buttons.',
  tech1:'Html',
  tech2:'Css',
  tech3:'Javascript',
  tech4:'jQuery',
  tech5:'Mailer JS',
}



]


const Project = () => {
  return (
    <section id='project' className='projects container section '>
      
      <div className="sectionTitle">
        <span className="titleNumber">03 .</span>
        <h5 className="titleText"> Projects
             <div className="underline"><span></span></div>
        </h5>
      </div>

          <div className="projectContainer grid">
             {
              data.map(({id, github, image, liveLink, desc, demo, title, tech1, tech2, tech3, tech4, tech5}) =>{
                return(
                  <div  key={id} className="singleProject">
                    <div className="externalLinks flex">
                      <div className="youtubeIcon">
                         <a href={demo}target="_blank" rel="noreferrer">
                          <AiFillYoutube className="icon"/>
                         </a>
                      </div>

                      <div className="githubIcon">
                         <a href={github}target="_blank" rel="noreferrer">
                          <FaGithub className="icon"/>
                         </a>
                      </div>
                    </div>

                    <div className="imgDiv">
                      <a href={liveLink}target="_blank" rel="noreferrer">
                        <img src={image} alt={title}  className="tes"/>
                      </a>
                    </div>

                     <div className="projectTitle">
                        <h3>{title}</h3>
                     </div>

                     <div className="desc">
                        {desc}
                     </div>

                     <div className="technologies flex">
                       <small>{tech1}</small>
                       <small>{tech2}</small>
                       <small>{tech3}</small>
                       <small>{tech4}</small>
                       <small>{tech5}</small>
                     </div>

                  </div>
                )
              } )
             }
          </div>

      </section>
  )
}

export default Project