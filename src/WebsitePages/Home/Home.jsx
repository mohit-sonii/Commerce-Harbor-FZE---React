import React from "react"
import "../../WebsitePages/Home/Home.css"
import Header from "../../HomeComponents/Files/Header/Header"
import LandingPage from "../../HomeComponents/Files/LandingPage/LandingPage"
import WhatWeDo from "../../HomeComponents/Files/What we Do/WhatWeDo"
import Products from "../../HomeComponents/Files/Products/Products"
import OurMission from "../../HomeComponents/Files/OurMission/OurMission"
import Qualities from "../../HomeComponents/Files/Qualities/Qualities"
import Excellence from "../../HomeComponents/Files/Excellence/Excellence"
import CTA from "../../HomeComponents/Files/CTA/CTA"
import Footer from "../../HomeComponents/Files/Footer/Footer"

function Home() {
     return (
          <>
               <div id="main">
                    {/* <div id="header">
                         <Header />
                    </div> */}
                    <LandingPage />
                    <div id="WhatWeDo">
                         <WhatWeDo />
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
                    {/* <div id="footer">
                         <Footer />
                    </div> */}
               </div>
          </>
     )
}

export default Home
