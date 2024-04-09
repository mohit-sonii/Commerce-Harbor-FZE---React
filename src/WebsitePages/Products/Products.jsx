import React from 'react'
import Info from '../../HomeComponents/Files/Info/Info'
import "./Products.css"
import LandingPage from "../../ProductComponents/Files/LandingPage/LandingPage"
import VirginImage from "../../../assets/ProductImages/VirginBanner.png"
import ProductCategory from '../../ProductComponents/Files/ProductCategory/ProductCategory'
const Products = () => {
     return (
          <>
               <LandingPage />
               <div id="Info">
                    <Info p1={'Raw plastic materials are the fundamental building blocks used in the manufacturing of plastic products. These materials are derived from various sources and undergo processing to create the diverse range of plastics we encounter daily'} p2={'Each raw material possesses distinct characteristics, making it suitable for specific applications. These raw materials are molded, extruded, or processed differently to create an extensive range of plastic items that are integral to modern life. These raw materials have revolutionized modern industry and daily life due to their versatility, affordability, and ease of production'} />
               </div>
               <ProductCategory category={'VIRGIN'} image={VirginImage}/>
               <div id="Info" className='VirginInfo'>
                    <Info p1={'These plastics have never undergone any prior processing or use, ensuring their purity and integrity. With no prior exposure to contaminants or degradation, our virgin raw plastics guarantee superior quality and performance, making them an ideal choice for a wide range of manufacturing applications. Virgin plastic is often chosen for its purity and consistency, making it suitable for a wide range of applications, including food packaging, medical devices, consumer goods, and more.'}/>
               </div>
          </>
     )
}

export default Products