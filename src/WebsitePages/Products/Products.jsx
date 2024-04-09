import React from 'react'
import LandingPageInfo from '../../HomeComponents/Files/LandingPageInfo/LandingPageInfo'
import LandingPage from "../../ProductComponents/Files/LandingPage/LandingPage"
const Products = () => {
     return (
          <>
               <LandingPage />
               <div id="LandingPageInfo">
                    <LandingPageInfo p1={'Raw plastic materials are the fundamental building blocks used in the manufacturing of plastic products. These materials are derived from various sources and undergo processing to create the diverse range of plastics we encounter daily'} p2={'Each raw material possesses distinct characteristics, making it suitable for specific applications. These raw materials are molded, extruded, or processed differently to create an extensive range of plastic items that are integral to modern life. These raw materials have revolutionized modern industry and daily life due to their versatility, affordability, and ease of production'} />
               </div>
          </>
     )
}

export default Products