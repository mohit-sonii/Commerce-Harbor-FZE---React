import React from 'react'
import AboutBanner from "../../../assets/Thumbnail/about.png"
import Info from '../../HomeComponents/Files/Info/Info'
import "./AboutUs.css"
import LandingPage from "../../ProductComponents/Files/LandingPage/LandingPage"
import WhyChooseUs from '../../AboutComponents/Files/WhyChooseUs/WhyChooseUs'
import ISOcertificate from "../../../assets/Thumbnail/ISO.png"
import ISOlogo from "../../../assets/logo/ISO.png"
import ISO from "../../AboutComponents/Files/ISO/ISO"

const AboutUs = () => {

     return (
          <>
               <LandingPage image={AboutBanner} title={"ABOUT US"} />
               <div id="Info">
                    <Info p1={"With Head office in Ajman, United Arab Emirates, our extensive range of polymers caters to a wide variety of applications, such as packaging, automotive, construction, electronics, and consumer goods. Whether you need polymers for injection moulding, extrusion, blow moulding, or any other manufacturing process, we have the right product for you."} p2={"We source our polymers from reputable producers, ensuring that they meet stringent quality standards. Our team of experts performs thorough testing and quality control checks to ensure that every batch of polymer we supply meets or exceeds industry standards"} />
               </div>
               <div id="ChooseUs">
                    <WhyChooseUs/>
                    <ISO backgroundImage={ISOcertificate} logo = {ISOlogo} heading={'An ISO 9001 : 2015 Certified Company '} subHeading = {'(Quality Management System)'}/>
               </div>
          </>
     )
}

export default AboutUs