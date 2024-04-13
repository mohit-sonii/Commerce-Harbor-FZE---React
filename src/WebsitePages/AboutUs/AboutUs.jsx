import React from 'react'
import AboutBanner from "../../../assets/Thumbnail/about.png"
import Info from '../../HomeComponents/Files/Info/Info'
import "./AboutUs.css"
import LandingPage from "../../ProductComponents/Files/LandingPage/LandingPage"
import WhyChooseUs from '../../AboutComponents/Files/WhyChooseUs/WhyChooseUs'
import ISOcertificate from "../../../assets/Thumbnail/ISO.png"
import ISOlogo from "../../../assets/logo/ISO.png"
import ISO from "../../AboutComponents/Files/ISO/ISO"
import Extra from "../../AboutComponents/Files/Extra/Extra"
import Image from "../../../assets/aboutUs images/extraimage.png"

const AboutUs = () => {

     return (
          <>
               <LandingPage image={AboutBanner} title={"ABOUT US"} />
               <div id="Info">
                    <Info p1={"With Head office in Ajman, United Arab Emirates, our extensive range of polymers caters to a wide variety of applications, such as packaging, automotive, construction, electronics, and consumer goods. Whether you need polymers for injection moulding, extrusion, blow moulding, or any other manufacturing process, we have the right product for you."} p2={"We source our polymers from reputable producers, ensuring that they meet stringent quality standards. Our team of experts performs thorough testing and quality control checks to ensure that every batch of polymer we supply meets or exceeds industry standards"} />
               </div>
               <div id="ChooseUs">
                    <WhyChooseUs />
                    <ISO backgroundImage={ISOcertificate} logo={ISOlogo} heading={'An ISO 9001 : 2015 Certified Company '} subHeading={'(Quality Management System)'} />
               </div>
               <div id="extra">
                    <div className="icon-des">

                         <Extra quality={'Quality Assurance'} description={'We adhere to strict quality control measures to ensure that the polymer raw materials we supply meet the highest industry standards.'} />

                         <Extra quality={'Reliability'} description={'Our consistent and timely deliveries ensure that your production processes remain seamless and efficient.'} />

                         <Extra quality={'Sustainability'} description={'We are committed to promoting sustainable practices by offering eco-friendly and recyclable polymer raw materials.'} />

                    </div>
                    <div className="image">
                         <img src={Image} alt="" />
                    </div>
               </div>
          </>
     )
}

export default AboutUs