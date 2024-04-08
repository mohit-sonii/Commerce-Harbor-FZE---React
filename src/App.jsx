import React from "react"
import './App.css'
import Header from "./HomeComponents/Files/Header/Header"
import Footer from "./HomeComponents/Files/Footer/Footer"
import { Outlet } from "react-router-dom"
import NavBar from "./HomeComponents/Files/NavBar/NavBar"
//is app ko as a base us kr lega aur iske andr jo bhi aaega vo same rkega

function App() {
     return (
          <div className="app-container">
               <div id="header">
                    <Header />
               </div>
               <div className="content">
                    <div className="navigation">
                         <NavBar />
                    </div>
                    <div id="main-content">
                         <Outlet />
                    </div>
               </div>
               <div id="footer">
                    <Footer />
               </div>
          </div>
     )
}

export default App
