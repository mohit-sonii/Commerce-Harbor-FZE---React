import React from "react"
import './App.css'
import Header from "./Components/Files/Header/Header"
import LandingPage from "./Components/Files/LandingPage/LandingPage"
import WhatWeDo from "./Components/Files/What we Do/WhatWeDo"
import Products from "./Components/Files/Products/Products"

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
               </div>
          </>
     )
}

export default App
