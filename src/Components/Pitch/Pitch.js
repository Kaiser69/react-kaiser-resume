import React from 'react';

import './pitch.css'
import './pitch.scss'


const Pitch = () => {

  return (
    <section className="pitch-section "  >
    <section id="intro" className="container pitch intro"  >
      
    <div id="intro-info" >
        <div >
          <h2 >My work is </h2>
            <p>Find the innovative IT solutions, frontend, servers, storage, and software</p>
         
        </div>
    </div>

    <div id="development-img" >
        <img src="https://www.dropbox.com/s/7hwnjccu15vt90e/mobileDevlopment.svg?raw=1" 
            alt="Mobile App Development" title="Mobile App Development" />
    </div>
    
</section>

  <section id="delivery" className='container' >
  <h2 className="sec-heading">User Experience & User Interface Design</h2>
  <div id='delivery-img' className="col-5 delivery-img">
      <img src="https://www.dropbox.com/s/ipx91osglyczpdt/delivery_experience.svg?raw=1"
           alt="Productivity Delivering Experience" title="Delivering Experience Since 2009"/>
  </div>
  <div className="col-7">
      <h3>Accelerating your business growth with Digital Experiences</h3>
      <p>
      Applying trends to usability… From research & wire-framing to cutting-edge design. I follow a customer-
      centric approach in order to deliver a cutting-edge User Experience<br/><br/> I am a full-stack UI/UX 
       product designer with over 15 years of experience I am an expert in UI, UX, mobile design, web design, 
        responsive design, marketing design, advertising, branding, presentation design as well as experience in 
         designing for integrated marketing strategy, social media campaigns, sales/business initiatives.
      </p>
  </div>
</section>
</section>
  )
}

export default Pitch