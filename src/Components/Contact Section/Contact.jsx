import React, {useRef} from 'react'
import './contact.scss'

import {BsInstagram} from 'react-icons/bs'
import {TbArrowBigRightLines} from 'react-icons/tb'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'


import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zp5kh6e', 'template_iD', form.current, 'user_OvwKLnQcfzlXeTfTEdggl')
    
    e.target.reset()
  };

  return (
    <section id='contact' className='contact section container '>
     
      <div className="sectionTitle">
          <span className="titleNumber">04 . </span>
          <h5 className="titleText">Contact with Me
              <div className="underline"><span></span></div>
            </h5>
      </div>

         <div className="contactContainer grid">
              <div className="socialContacts grid">
                <h3>Talk to me</h3>

                   <div className="cards grid">
                        <div className="card">
                          <div>
                            <BsInstagram className="icon instaIcon"/>
                          </div>
                          <h4>Instgram</h4>
                          <span className="userName">
                            @uyghurlund
                          </span>

                          <div>
                               <a href="https://www.instagram.com/uyghurlund/" target="_blank" rel="noreferrer"
                                className="flex">
                                Send Message 
                                <TbArrowBigRightLines className="icon"/>
                               </a>
                          </div>
                        </div>
                        <div className="card">
                          <div>
                            <AiFillLinkedin  className="icon instaIcon"/>
                          </div>
                          <h4>Linkedin</h4>
                          <span className="userName">
                            @Kaiser ÖzHun
                          </span>

                          <div>
                               <a href="https://www.linkedin.com/in/kaiser-a-%C3%B6zhun/" 
                                    target="_blank"  rel="noreferrer"className="flex">
                                Send Message 
                                <TbArrowBigRightLines className="icon"/>
                               </a>
                          </div>
                        </div>
                        <div className="card">
                          <div>
                            <AiFillYoutube className="icon instaIcon"/>
                          </div>
                          <h4>Youtube</h4>
                          <span className="userName">
                            @Kaiser A ÖzHun
                          </span>

                          <div>
                               <a href="https://www.youtube.com/channel/UCuA8fAUREGlVakisq3ako6Q" 
                               target="_blank"  rel="noreferrer"className="flex">
                                Send Message 
                                <TbArrowBigRightLines className="icon"/>
                               </a>
                          </div>
                        </div>

                        <div className="card">
                          <div>
                            <FaFacebookSquare className="icon instaIcon"/>
                          </div>
                          <h4>Facebook</h4>
                          <span className="userName">
                            @Kaiser ÖzHun
                          </span>

                          <div>
                               <a href="https://www.facebook.com/kaiser.ozhun" 
                               target="_blank"  rel="noreferrer"className="flex">
                                Send Message 
                                <TbArrowBigRightLines className="icon"/>
                               </a>
                          </div>
                        </div>
                   </div>

               

              </div>

                  <div className="form grid">
                       <h3>Send me an message</h3>

                       <form ref={form} onSubmit={sendEmail}>
                              <input type="text" placeholder='Enter your Name' name='name' required/>
                              <input type="email" placeholder='Enter your Email' name='email' required />
                              <textarea name="message" id="" placeholder='Enter your Message'></textarea>

                              <button className="formBtn " type='submit' name='submit'>
                                Send Email
                              </button>
                       </form>
                  </div>
         </div>
      </section>
  )
}

export default Contact