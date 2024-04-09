import React from "react"
import "../../WebsitePages/Home/Home.css"
import Header from "../../HomeComponents/Files/Header/Header"
import LandingPage from "../../HomeComponents/Files/LandingPage/LandingPage"
import Info from "../../HomeComponents/Files/Info/Info"
import Products from "../../HomeComponents/Files/Products/Products"
import OurMission from "../../HomeComponents/Files/OurMission/OurMission"
import Qualities from "../../HomeComponents/Files/Qualities/Qualities"
import Excellence from "../../HomeComponents/Files/Excellence/Excellence"
import CTA from "../../HomeComponents/Files/CTA/CTA"
import Footer from "../../HomeComponents/Files/Footer/Footer"

function Home() {
     return (
          <div id="main">
               <LandingPage />
               <div id="Info">
                    <Info heading={'OUR SERVICES'} heading2={'What We Do?'} p1 = {'At Commerce Harbor FZE, we pride ourselves on being a leading supplier of high-quality polymers to a wide range of industries. With a strong commitment to customer satisfaction and decades of cumulative experience in the industry, we strive to offer the best polymer solutions for your specific needs'}  p2={'To ensure a seamless experience for our customers, we maintain a robust supply chain and efficient logistics network. We have partnered with reliable shipping and freight companies to ensure timely delivery of your polymer orders, no matter where you are located.'} />
               </div>
               <div id="products">
                    <Products />
               </div>
               <OurMission />
               <div id="qualities">
                    <Qualities />
               </div>
               <Excellence />
               <div id="cta">
                    <CTA />
               </div>
          </div>
     )
}

export default Home
