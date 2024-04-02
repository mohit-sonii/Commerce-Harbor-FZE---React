import React from "react"
import './App.css'
import Header from "./Components/Files/Header/Header"
import NavBar from "./Components/Files/NavBar/NavBar"

function App() {
     return (
          <>
               <div id="main">
                    <div id="header">
                         <Header />
                    </div>
                    {/* <div id="navigation"> */}
                         <NavBar/>
                    {/* </div> */}
               </div>
          </>
     )
}

export default App
