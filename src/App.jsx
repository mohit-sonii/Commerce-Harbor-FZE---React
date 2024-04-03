import React from "react"
import './App.css'
// import image1 from "../assets/Thumbnail/Picture1.png"
import Header from "./Components/Files/Header/Header"
import LandingPage from "./Components/Files/LandingPage/LandingPage"

function App() {
     return (
          <>
               <div id="main">
                    <div id="header">
                         <Header />
                    </div>
                    {/* <div id="landing-page"> */}
                         <LandingPage/>
                    {/* </div> */}
               </div>
          </>
     )
}

export default App
