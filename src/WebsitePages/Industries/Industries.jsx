import React from 'react'

import LandingPage from "../../ProductComponents/Files/LandingPage/LandingPage"
import Info from '../../HomeComponents/Files/Info/Info'
import IndustryBanner from "../../../assets/Thumbnail/Industries.png"
const Industries = () => {
  return (
     <>
     <LandingPage title= {"INDUSTRIES"} image={IndustryBanner}/>
     <div id="Info">
                    <Info p1={`At Commerce Harbor FZE ,we understand that different industries have distinct requirements when it comes to polymers. With a commitment to excellence and a passion for innovation, we've built strong relationships with manufacturers and clients alike. Whether you're in the automotive, agriculture, packaging, medical, or any other industry, we have the polymer solutions you need.`} />
               </div>

     </>
  )
}

export default Industries