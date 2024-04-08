import React from "react"
import './App.css'
import Home from "./WebsitePages/Home/Home"
import Header from "./HomeComponents/Files/Header/Header"
import Footer from "./HomeComponents/Files/Footer/Footer"
import {Outlet} from "react-router-dom"
//is app ko as a base us kr lega aur iske andr jo bhi aaega vo same rkega

function App() {
     return (
          <>
               {/* <Home/> */}
               <Header/>
               <Outlet/> 
               {/* header aur8 footer same rhega77 aur baki hcange hota rhega */}

               <Footer/>
          </>
     )
}

export default App
