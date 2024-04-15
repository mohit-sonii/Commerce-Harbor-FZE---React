import {React,useEffect} from 'react'
import './ContactUs.css'
import Form from "../../ContactComponents/Files/Form"
import ContactOptions from "../../ContactComponents/Files/ContactOptions"
import LandingPage from "../../ProductComponents/Files/LandingPage/LandingPage"
import ContactBanner from "../../../assets/Thumbnail/Contact.png"
import { useLocation } from "react-router-dom"

const ContactUs = () => {

     const { scrolling } = useLocation();
     useEffect(() => {
          window.scrollTo(0, 0);
     }, [scrolling])


     return (
          <>
               <LandingPage title={"CONTACT US"} image={ContactBanner} />
               <div id="ContactOptions">
                    <ContactOptions />
               </div>
               <div id="form">
                    <Form/>
               </div>
          </>
     )
}

export default ContactUs