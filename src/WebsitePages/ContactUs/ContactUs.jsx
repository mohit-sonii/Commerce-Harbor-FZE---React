import React from 'react'
import './ContactUs.css'
import ContactOptions from "../../ContactComponents/Files/ContactOptions"
import LandingPage from "../../ProductComponents/Files/LandingPage/LandingPage"
import ContactBanner from "../../../assets/Thumbnail/Contact.png"
const ContactUs = () => {
     return (
          <>
               <LandingPage title={"CONTACT US"} image={ContactBanner} />
               <div id="ContactOptions">
                    <ContactOptions />
               </div>
          </>
     )
}

export default ContactUs