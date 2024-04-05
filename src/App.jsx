import React from "react"
import './App.css'
import Header from "./Components/Files/Header/Header"
import LandingPage from "./Components/Files/LandingPage/LandingPage"
import WhatWeDo from "./Components/Files/What we Do/WhatWeDo"
import Products from "./Components/Files/Products/Products"
import OurMission from "./Components/Files/OurMission/OurMission"
import Qualities from "./Components/Files/Qualities/Qualities"
import Excellence from "./Components/Files/Excellence/Excellence"
import CTA from "./Components/Files/CTA/CTA"

function App() {
     return (
          <>
               <div id="main">
                    <div id="header">
                         <Header />
                    </div>
                    <LandingPage />
                    <div id="WhatWeDo">
                         <WhatWeDo />
                    </div>
                    <div id="products">
                         <Products/>
                    </div>
                    <OurMission/>
                    <div id="qualities">
                         <Qualities/>
                    </div>
                    <Excellence/>
                    <div id="cta">
                         <CTA/>
                    </div>
               </div>
          </>
     )
}

export default App
